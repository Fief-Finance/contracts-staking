export const SIGNER_ROLE = "SIGNER_ROLE";
export const PAUSER_ROLE = "PAUSER_ROLE";
export const MINTER_ROLE = "MINTER_ROLE";
export const CONFIGURATOR_ROLE = "CONFIGURATOR_ROLE";
export const ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";

export const getPauserRole = (ethers: any) =>
    ethers.utils.solidityKeccak256(["string"], [PAUSER_ROLE]);

export const getMinterRole = (ethers: any) =>
    ethers.utils.solidityKeccak256(["string"], [MINTER_ROLE]);

export const getConfiguratorRole = (ethers: any) =>
    ethers.utils.solidityKeccak256(["string"], [CONFIGURATOR_ROLE]);

export const getSignerRole = (ethers: any) =>
    ethers.utils.solidityKeccak256(["string"], [SIGNER_ROLE]);

export const getAdminRole = (ethers: any) => ADMIN_ROLE;
