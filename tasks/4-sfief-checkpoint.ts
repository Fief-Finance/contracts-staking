/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {SFIEF} from "../typechain-types";

/*
    yarn 4-sfief-checkpoint:goerli --sfief 0x123...123 --exec-tx true
*/
task("4-sfief-checkpoint", "Call the global SFIEF checkpoint")
    .addParam("sfief", "sFIEF address")
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {
            sFief: sFiefAddress,
            execTx,
        } = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(`sFIEF:      ${sFiefAddress}`);

        const sFief = await ethers.getContractAt("sFIEF", sFiefAddress) as SFIEF;
        
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tx = await sFief.checkpoint();
        const recipient = await tx.wait();
        console.log(`Tx hash sFIEF.checkpoint(): ${recipient.transactionHash}`);
    });
module.exports = {};
