/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {FeeDistributor} from "../typechain-types";

/*
    npx hardhat deploy-distributor --network goerli --vetoken 0x0000000000000000000000000000000000000000 --starttime 8412154 --distributiontoken 0x0000000000000000000000000000000000000000 --admin 0x0000000000000000000000000000000000000000 --feepercent 1234567 --exec-tx false
*/
task("deploy-distributor", "Deploys the fee distributor smart contract")
    .addParam(
        "vetoken",
        "sFIEF address",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("starttime", "Time for distribution to start", 999999999, types.int)
    .addParam(
        "distributiontoken",
        "FEIF addrsss",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("admin", "Admin address", "0x0000000000000000000000000000000000000000", types.string)
    .addParam(
        "emergencyReturn",
        "Address to transfer distToken balance to if contract is killed",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {vetoken, starttime, distributiontoken, admin, emergencyReturn, execTx} = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(
            `sFIEF / StartTime / FIEF / Admin / Emergency:      ${vetoken} / ${starttime} / ${distributiontoken} / ${admin} / ${emergencyReturn}`
        );
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("FeeDistributor");
        const feeDistributor = (await tokenFactory.deploy(
            vetoken,
            starttime,
            distributiontoken,
            admin,
            emergencyReturn
        )) as FeeDistributor;

        console.log(
            `npx hardhat verify ${feeDistributor.address} --network ${env.network.name} ${vetoken} "${starttime}" "${distributiontoken}" "${admin}" "${emergencyReturn}"`
        );
    });
module.exports = {};
