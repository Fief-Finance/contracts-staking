/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {SFIEF} from "../typechain-types/SFIEF";

/*
    npx hardhat deploy-sfief --network localhost --token-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --name StakedFIEF --symbol sFIEF --fee-collector 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --fee-percent 0 --exec-tx true
*/
task("deploy-sfief", "Deploys sFIEF Smart contract")
    .addParam(
        "tokenAddress",
        "FIEF token address",
        "0x26FE8a8f86511d678d031a022E48FfF41c6a3e3b", // Test token on goerli
        types.string
    )
    .addParam("name", "Token name", "Staked FIEF", types.string)
    .addParam("symbol", "Token symbol", "sFIEF", types.string)
    .addParam("feeCollector", "Address performace fee is sent to", "", types.string)
    .addParam("feePercent", "Performace fee percent", 500000, types.int)
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {tokenAddress, name, symbol, feeCollector, feePercent, execTx} = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(
            `Name / Symbol / FeeCollector / FeePercent / FIEF Address:      ${name} / ${symbol} / ${feeCollector} / ${feePercent} / ${tokenAddress}`
        );
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("sFIEF");
        const sFIEFToken = (await tokenFactory.deploy(
            tokenAddress,
            name,
            symbol,
            feeCollector,
            feePercent
        )) as SFIEF;

        console.log(
            `npx hardhat verify ${sFIEFToken.address} --network ${env.network.name} ${tokenAddress} "${name}" "${symbol}" "${feeCollector}" "${feePercent}"`
        );
    });
module.exports = {};
