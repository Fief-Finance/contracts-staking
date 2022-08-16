import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {ethers} from "hardhat";
import {ERC20Mock, SFIEF} from "../typechain-types";
import {BigNumber} from "@ethersproject/bignumber";
import {expect} from "chai";
import {advanceBlock, duration} from "./helpers/Time";
import {parseEther} from "ethers/lib/utils";

describe("Staked FIEF", function () {
    let deployer: SignerWithAddress;
    let staker: SignerWithAddress;

    let FIEFMock: ERC20Mock;
    let sFIEF: SFIEF;

    beforeEach(async function () {
        [deployer, staker] = await ethers.getSigners();

        // Deploy mock FIEF
        const fiefFactory = await ethers.getContractFactory("ERC20Mock");
        FIEFMock = (await fiefFactory.deploy("FIEF", "FIEF", 18)) as ERC20Mock;
        await FIEFMock.deployed();
        console.log(`FIEF deployed at: ${FIEFMock.address}`);

        // Deploy sFIEF
        const sFiefFactory = await ethers.getContractFactory("sFIEF");
        sFIEF = (await sFiefFactory.deploy(
            FIEFMock.address,
            "Staked FIEF",
            "FIEF",
            deployer.address,
            BigNumber.from(0.5 * 10 ** 8)
        )) as SFIEF;
        await sFIEF.deployed();
        console.log(`sFIEF deployed at: ${sFIEF.address}`);

        // Send staker all the FIEF
        await FIEFMock.connect(deployer).mint(staker.address, await FIEFMock.totalSupply());

        // Verify staker has $FIEF
        expect((await FIEFMock.balanceOf(staker.address)) > BigNumber.from(0));
    });

    describe("Create lock - sFIEF balance", function () {
        it("Should receive ~500k sFIEF when staking 1mil FIEF", async function () {
            // Get block time now plus 1 year to uint
            const lastBlock = await ethers.provider.getBlock("latest");
            const lockDuration = duration.years(1).add(lastBlock.timestamp);

            const fiefBalanceBefore = await FIEFMock.balanceOf(staker.address);
            const sFIEFBalanceBefore = await sFIEF["balanceOf(address)"](staker.address);

            // Approve spend
            await FIEFMock.connect(staker).approve(sFIEF.address, fiefBalanceBefore);
            // Create lock with 1 mill
            await sFIEF.connect(staker).create_lock(parseEther("1000000"), lockDuration);

            const fiefBalanceAfter = await FIEFMock.balanceOf(staker.address);
            const sFIEFBalanceAfter = await sFIEF["balanceOf(address)"](staker.address);

            // // Verify sFief balance is ~500k
        });
    });
});
