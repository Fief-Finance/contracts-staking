/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {FeeDistributor} from "../typechain-types";

/*
    yarn 5-fee-distributor-checkpoint-token:goerli --fee-distributor 0x123...123 --exec-tx true
*/
task("5-fee-distributor-checkpoint-token", "Call the Fee Distributor checkpointToken function")
    .addParam("feeDistributor", "Fee distributor address")
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {
            feeDistributor: feeDistributorAddress,
            execTx,
        } = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(`Fee Distributor:               ${feeDistributorAddress}`);

        const feeDistributor = await ethers.getContractAt("FeeDistributor", feeDistributorAddress) as FeeDistributor;
        
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tx = await feeDistributor.checkpoint_token();
        const recipient = await tx.wait();
        console.log(`Tx hash FeeDistributor.checkpoint_token(): ${recipient.transactionHash}`);
    });
module.exports = {};
