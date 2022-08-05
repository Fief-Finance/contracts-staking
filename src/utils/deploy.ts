import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {Contract} from "ethers";
import _ from "lodash";
import {
    ERC20_MOCK_NAME,
} from "./names";

export const deployMockERC20 = async (
    params: {
        paymentTokens: Array<{
            name: string;
            symbol: string;
            decimals: number;
        }>;
    },
    utils: {ethers: any; deployer: SignerWithAddress}
): Promise<Contract[]> => {
    const erc20MockFactory = await utils.ethers.getContractFactory(ERC20_MOCK_NAME);
    const paymentTokensList = [];
    for (const paymentToken of params.paymentTokens) {
        const erc20Mock = await erc20MockFactory.deploy(
            paymentToken.name,
            paymentToken.symbol,
            paymentToken.decimals
        );
        paymentTokensList.push(erc20Mock);
    }
    return paymentTokensList;
};

export const deployMocks = async (
    params: {
        total: number;
    },
    utils: {ethers: any; deployer: SignerWithAddress}
): Promise<Contract[]> => {
    const erc20MockFactory = await utils.ethers.getContractFactory(ERC20_MOCK_NAME);
    const mocks = [];
    for (const index of _.range(0, params.total + 1)) {
        const erc20Mock = await erc20MockFactory
            .connect(utils.deployer)
            .deploy(`Name${index}`, `Symbol${index}`, 18);
        mocks.push(erc20Mock);
    }
    return mocks;
};
