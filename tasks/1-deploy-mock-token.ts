/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {ERC20Mock} from "../typechain-types";
import {ZERO_ADDRESS} from "../src/utils/consts";
import {toDecimals} from "../src/utils/numbers";
import {addContract, printContracts} from "../src/utils/utils";
import {ERC20_MOCK_NAME} from "../src/utils/names";

/*
    yarn 1-deploy-mock-token:fuji --exec-index 0 --name DAIMock --symbol DAIMock --decimals 18 --mint-amount 10000000000 --mint-to 0x0000000000000000000000000000000000000000 --exec-tx false
     npx hardhat 1-deploy-mock-token --network localhost --exec-index 0 --name FIEFMock --symbol FIEFMock --decimals 18 --mint-amount 10000000000 --mint-to 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --exec-tx true
*/
task("1-deploy-mock-token", "Deploy the MOCK smart contract.")
    .addParam("execIndex", "Account index executor.", 0, types.int)
    .addParam("name", `Token name.`, "Token Name", types.string)
    .addParam("symbol", `Token symbol.`, "TKN", types.string)
    .addParam("decimals", `Token decimals.`, 18, types.int)
    .addParam(
        "mintAmount",
        "Amount of tokens to mint in units (non-decimals). Default: 10 MM tokens",
        "10000000",
        types.string
    )
    .addParam("mintTo", "Account that will receive the tokens.", ZERO_ADDRESS, types.string)
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {
            execIndex,
            mintAmount: mintAmountString,
            name,
            symbol,
            decimals,
            mintTo,
            execTx,
        } = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[execIndex];

        console.log(`Executor Address (# index):    ${executor.address} (${execIndex})`);
        console.log(`Mint Amount:                   ${mintAmountString.toString()}`);
        console.log(`Name / Symbol / Decimals:      ${name} / ${symbol} / ${decimals}`);
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory(ERC20_MOCK_NAME);
        const token = (await tokenFactory.deploy(name, symbol, decimals.toFixed())) as ERC20Mock;
        const initialMintAmount = toDecimals(mintAmountString, decimals);
        const mintToAddress = mintTo === ZERO_ADDRESS ? executor.address : mintTo;
        const result = await token.mint(mintToAddress, initialMintAmount.toFixed(0));
        await result.wait();
        const contracts: any[] = [];
        addContract(contracts, name, token);
        printContracts(env.network.name, [token]);

        console.log(
            `npx hardhat verify --contract contracts/mocks/ERC20Mock.sol:ERC20Mock --network ${
                env.network.name
            } ${token.address} "${name}" "${symbol}" "${decimals.toFixed()}"`
        );
    });

module.exports = {};
