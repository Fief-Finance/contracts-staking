import BigNumber from "bignumber.js";

export const toDecimals = (amount: number | string, decimals: number) => {
    return new BigNumber(amount).times(new BigNumber(10).pow(decimals));
};

export const toUnits = (amount: number | string, decimals: number) => {
    return new BigNumber(amount).div(new BigNumber(10).pow(decimals));
};
