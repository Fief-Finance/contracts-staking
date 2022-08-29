/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {SFIEF} from "../typechain-types/SFIEF";

/*
    yarn 2-deploy-sfief:goerli --token-address 0x7AEc85F0a47E018E6d0ac1FE05349c5124f6823F --name StakedFIEF --symbol sFIEF --exec-tx true
*/
task("deploy-sfief", "Deploys sFIEF Smart contract")
    .addParam("tokenAddress", "FIEF token address")
    .addParam("name", "Token name", "\"Staked FIEF\"", types.string)
    .addParam("symbol", "Token symbol", "sFIEF", types.string)
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {tokenAddress, name, symbol, execTx} = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(`Name / Symbol / FIEF Address:      ${name} / ${symbol} / ${tokenAddress}`);
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("sFIEF");
        const sFIEFToken = (await tokenFactory.deploy(tokenAddress, name, symbol)) as SFIEF;

        console.log(
            `npx hardhat verify --contract contracts/sFIEF.vy:sFIEF --network ${
                env.network.name
            } ${tokenAddress} "${name}" "${symbol}"`
        );
    });
module.exports = {};
