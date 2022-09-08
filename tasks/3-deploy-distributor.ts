/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import { getBlockTimestamp } from "../src/utils/utils";
import {FeeDistributor} from "../typechain-types";

/*
    yarn 3-deploy-distributor:goerli --ve-token 0xA1a6f77436975de137aF90853D922c6Acfb1885B --start-time 8412154 --distribution-token 0x7AEc85F0a47E018E6d0ac1FE05349c5124f6823F --admin 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --emergency-return 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --fee-percent 50000000000000000 --fee-collector 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --exec-tx true
*/
task("deploy-distributor", "Deploys the fee distributor smart contract")
    .addParam("veToken", "sFIEF address")
    .addParam("startTime", "Time for distribution to start", 0, types.int)
    .addParam("distributionToken", "FIEF address")
    .addParam("admin", "Admin address")
    .addParam("emergencyReturn", "Address to transfer distToken balance to if contract is killed")
    .addParam("feePercent", "Performance fee percent", "500000000000000000", types.string)
    .addParam("feeCollector", "Address performance fee is sent to")
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {
            veToken,
            startTime,
            distributionToken,
            admin,
            emergencyReturn,
            feeCollector,
            feePercent,
            execTx,
        } = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(
            `sFIEF / StartTime / FIEF / Admin / Emergency / FeePercent / FeeCollector :      ${veToken} / ${startTime} / ${distributionToken} / ${admin} / ${emergencyReturn} / ${feePercent} / ${feeCollector}`
        );
        const timestamp = await getBlockTimestamp(ethers);
        const timestampToUse = startTime === 0 ? timestamp: startTime;
        console.log(`Timestamp:         ${timestamp}`);
        console.log(`Timestamp To Use:  ${timestampToUse}`);
        console.log(`Execute TX?:       ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("FeeDistributor");
        const feeDistributor = (await tokenFactory.deploy(
            veToken,
            timestampToUse,
            distributionToken,
            admin,
            emergencyReturn,
            feePercent,
            feeCollector
        )) as FeeDistributor;

        //`npx hardhat verify --contract contracts/mocks/ERC20Mock.sol:ERC20Mock 
        console.log(
            `npx hardhat verify --contract contracts/FeeDistributor.vy:FeeDistributor ${feeDistributor.address} --network ${env.network.name} ${veToken} "${startTime}" "${distributionToken}" "${admin}" "${emergencyReturn}" "${feePercent}" "${feeCollector}"`
        );
    });
module.exports = {};
