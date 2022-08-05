import {Contract} from "@ethersproject/contracts";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import _ from "lodash";
import {ZERO_ADDRESS} from "./consts";

export const hashRole = (ethers: any, name: string) =>
    ethers.utils.solidityKeccak256(["string"], [name]);

export const printContracts = (network: string, contracts: any[]) => {
    console.log(`Network:      ${network}`);
    JSON.stringify(contracts, null, 4);
};

export const addContract = (contracts: any[], id: string, contract: Contract) => {
    console.log(`Adding contract '${id}' = '${contract.address}'`);
    contracts.push({
        id,
        address: contract.address,
        url: "",
    });
};

export const stringToBytes32 = (ethers: any, value: string) =>
    ethers.utils.formatBytes32String(value);

export const getBlockTimestamp = async (ethers: any) => {
    const block = await ethers.provider.getBlock("latest");
    return block.timestamp;
};

export const getAddress = (signers: SignerWithAddress[], index: number) =>
    index >= 0 ? signers[index].address : ZERO_ADDRESS;
