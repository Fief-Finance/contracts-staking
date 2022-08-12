/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {SFIEF} from "../typechain-types/SFIEF";

/*
    yarn 2-deploy-sfief:rinkeby --tokenAddress 0xeA068Fba19CE95f12d252aD8Cb2939225C4Ea02D --name "Staked FIEF" --symbol sFIEF --feeCollector 0xeA068Fba19CE95f12d252aD8Cb2939225C4Ea02D --feePercent 500000000000000000 --exec-tx false
*/
task("2-deploy-sfief", "Deploys sFIEF Smart contract")
    .addParam("tokenaddress", "FIEF token address", "", types.string)
    .addParam("name", "Token name", "Staked FIEF", types.string)
    .addParam("symbol", "Token symbol", "sFIEF", types.string)
    .addParam("feecollector", "Address performace fee is sent to", "", types.string)
    .addParam("feepercent", "Performace fee percent", 0, types.int)
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {tokenaddress, name, symbol, feecollector, feepercent, execTx} = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(
            `Name / Symbol / FeeCollector / FeePercent / FIEF Address:      ${name} / ${symbol} / ${feecollector} / ${feepercent} / ${tokenaddress}`
        );
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("sFIEF");
        const sFIEFToken = (await tokenFactory.deploy(
            tokenaddress,
            name,
            symbol,
            feecollector,
            feepercent
        )) as SFIEF;

        console.log(
            `npx hardhat verify ${sFIEFToken.address} --network ${env.network.name} ${tokenaddress} "${name}" "${symbol}" "${feecollector}" "${feepercent}"`
        );
    });
module.exports = {};
