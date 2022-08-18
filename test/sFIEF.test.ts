import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {ethers} from "hardhat";
import {ERC20Mock, SFIEF} from "../typechain-types";
import {BigNumber} from "@ethersproject/bignumber";
import {expect} from "chai";
import {duration, increase} from "./helpers/Time";
import {parseEther} from "ethers/lib/utils";
import {areCloseValues} from "./helpers/Numbers";

describe("Staked FIEF", function () {
    let deployer: SignerWithAddress;
    let staker: SignerWithAddress;
    let feeCollector: SignerWithAddress;

    let FIEFMock: ERC20Mock;
    let sFIEF: SFIEF;

    const performanceFee: BigNumber = BigNumber.from("50000000000000000"); // 0.05 * 10 ** 18

    beforeEach(async function () {
        [deployer, staker, feeCollector] = await ethers.getSigners();

        // Deploy mock FIEF
        const fiefFactory = await ethers.getContractFactory("ERC20Mock");
        FIEFMock = (await fiefFactory.deploy("FIEF", "FIEF", 18)) as ERC20Mock;
        await FIEFMock.deployed();
        // console.log(`FIEF deployed at: ${FIEFMock.address}`);

        // Deploy sFIEF
        const sFiefFactory = await ethers.getContractFactory("sFIEF");
        sFIEF = (await sFiefFactory.deploy(
            FIEFMock.address,
            "Staked FIEF",
            "FIEF",
            feeCollector.address,
            performanceFee
        )) as SFIEF;
        await sFIEF.deployed();
        // console.log(`sFIEF deployed at: ${sFIEF.address}`);

        // Send staker 1m FIEF
        await FIEFMock.connect(deployer).mint(staker.address, parseEther("1000000"));

        // Verify staker has $FIEF
        expect((await FIEFMock.balanceOf(staker.address)) > BigNumber.from(0));
    });

    describe("Create lock - verify sFIEF balance", function () {
        var testCases = [
            {
                lockDuration: duration.years(1),
                lockDurationString: "1 year",
                depositAmount: parseEther("1000000"),
                expectedSFief: parseEther("500000"),
            },
            {
                lockDuration: duration.years(2),
                lockDurationString: "2 years",
                depositAmount: parseEther("1000000"),
                expectedSFief: parseEther("1000000"),
            },
            {
                lockDuration: duration.years(1).div(2), // 6 months
                lockDurationString: "6 months",
                depositAmount: parseEther("1000000"),
                expectedSFief: parseEther("250000"),
            },
            {
                lockDuration: duration.years(1).div(2), // 3 months
                lockDurationString: "3 months",
                depositAmount: parseEther("1000000"),
                expectedSFief: parseEther("125000"),
            },
        ];

        testCases.forEach(function (testCase) {
            it(`Should receive ~${testCase.expectedSFief} $sFIEF when staking ${testCase.depositAmount} for ${testCase.lockDurationString}`, async function () {
                // Get block time now plus lock year to uint
                const lastBlock = await ethers.provider.getBlock("latest");
                const lockDuration = testCase.lockDuration.add(lastBlock.timestamp);
                const lockAmount = testCase.depositAmount;

                const fiefBalanceBefore = await FIEFMock.balanceOf(staker.address);
                const sFIEFBalanceBefore = await sFIEF["balanceOf(address)"](staker.address);

                expect(sFIEFBalanceBefore).to.eq(0);

                // Approve spend
                await FIEFMock.connect(staker).approve(sFIEF.address, fiefBalanceBefore);
                // Create lock
                await sFIEF.connect(staker).create_lock(lockAmount, lockDuration);

                const fiefBalanceAfter = await FIEFMock.balanceOf(staker.address);
                const sFIEFBalanceAfter = await sFIEF["balanceOf(address)"](staker.address);

                // Verify correct amount deducted
                expect(fiefBalanceAfter).to.equal(fiefBalanceBefore.sub(lockAmount));

                // Verify sFief balance is close to expected.
                expect(
                    areCloseValues(
                        parseInt(sFIEFBalanceAfter.toString()),
                        parseInt(testCase.expectedSFief.toString()),
                        1e2
                    )
                ).to.equal(true);
            });
        });

        it(`Should revert when creating a lock for longer than 2 years`, async function () {
            // Get block time now plus lock year to uint
            const lastBlock = await ethers.provider.getBlock("latest");
            const lockDuration = duration.years(3).add(lastBlock.timestamp);
            const lockAmount = parseEther("1000000");

            const fiefBalanceBefore = await FIEFMock.balanceOf(staker.address);
            const sFIEFBalanceBefore = await sFIEF["balanceOf(address)"](staker.address);

            expect(sFIEFBalanceBefore).to.eq(0);

            // Approve spend
            await FIEFMock.connect(staker).approve(sFIEF.address, fiefBalanceBefore);

            // Verify create lock reverts
            await expect(
                sFIEF.connect(staker).create_lock(lockAmount, lockDuration)
            ).to.be.revertedWith("Voting lock can be 2 years max");
        });
    });

    describe("Withdraw - verify staker & fee collector FIEF balance", function () {
        var testCases = [
            {
                lockDuration: duration.years(1),
                depositAmount: parseEther("1000000"),
                expectedWithdrawalAmount: parseEther("950000"),
                expectedFeeToCollect: parseEther("50000"),
            },
            {
                lockDuration: duration.years(2),
                depositAmount: parseEther("50"),
                expectedWithdrawalAmount: parseEther("999997.5"),
                expectedFeeToCollect: parseEther("2.5"),
            },
        ];

        testCases.forEach(function (testCase) {
            it.only(`Should receive ${testCase.expectedWithdrawalAmount} $FIEF when withdrawing after lock has expired`, async function () {
                // Get block time now plus lock year to uint
                const lastBlock = await ethers.provider.getBlock("latest");
                const lockDuration = testCase.lockDuration.add(lastBlock.timestamp);

                const lockAmount = testCase.depositAmount;

                const fiefBalanceBefore = await FIEFMock.balanceOf(staker.address);

                const sFIEFBalanceBefore = await sFIEF["balanceOf(address)"](staker.address);
                expect(sFIEFBalanceBefore).to.eq(0);

                // Approve spend
                await FIEFMock.connect(staker).approve(sFIEF.address, fiefBalanceBefore);
                // Create lock
                await sFIEF.connect(staker).create_lock(lockAmount, lockDuration);

                const fiefBalanceAfterDeposit = await FIEFMock.balanceOf(staker.address);
                expect(fiefBalanceAfterDeposit).to.equal(fiefBalanceBefore.sub(lockAmount));

                // Fast forward to unlock time
                increase(lockDuration);

                const feeCollectorBalanceBefore = await FIEFMock.balanceOf(feeCollector.address);
                expect(feeCollectorBalanceBefore).to.equal(0);

                // Withdraw
                await sFIEF.connect(staker).withdraw();

                // Verify FIEF balance is expected withdraw amount
                const fiefBalanceAfterWithdraw = await FIEFMock.balanceOf(staker.address);
                expect(fiefBalanceAfterWithdraw).to.equal(testCase.expectedWithdrawalAmount);

                // Verify fee was collected
                const feeCollectorBalanceAfter = await FIEFMock.balanceOf(feeCollector.address);
                expect(feeCollectorBalanceAfter).to.equal(testCase.expectedFeeToCollect);
            });
        });
    });
});
