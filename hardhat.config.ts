/* eslint-disable import/no-extraneous-dependencies */
import { config as dotenvConfig } from 'dotenv';
import 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';
import "./tasks";

dotenvConfig();

const explorerApiKey = process.env.EXPLORER_API_KEY as string;
const infuraApiKey = process.env.INFURA_API_KEY as string;
const account0PrivateKey = process.env.ACCOUNT_0_PK as string;
const account1PrivateKey = process.env.ACCOUNT_1_PK as string;
const account2PrivateKey = process.env.ACCOUNT_2_PK as string;
const accountPrivateKeys = [account0PrivateKey];
if (account1PrivateKey !== undefined ) {
  accountPrivateKeys.push(account1PrivateKey);
}
if (account2PrivateKey !== undefined ) {
  accountPrivateKeys.push(account2PrivateKey);
}
const settings = {
  optimizer: {
    enabled: true,
    // Optimize for how many times you intend to run the code.
    // Lower values will optimize more for initial deployment cost, higher
    // values will optimize more for high-frequency usage.
    runs: 1000,
  },
};
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      { version: '0.8.4', settings }
    ],
  },
  networks: {
    hardhat: {},
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 25100000000,
      chainId: 43113,
      accounts: accountPrivateKeys
    },
    avax: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 30000000000,
      chainId: 43114,
      accounts: accountPrivateKeys
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
      gasPrice: 2000000000, // 1 Gwei
      chainId: 4,
      accounts: accountPrivateKeys,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${infuraApiKey}`,
      gasPrice: 30000000000, // 30 Gwei
      chainId: 1,
      accounts: accountPrivateKeys,
    },
    coverage: {
      url: 'http://localhost:8555',
    },
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 150,
    // See more details: https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/codechecks.md#failure-thresholds
    maxMethodDiff: 25,
    excludeContracts: [
      'ERC20Mock',
      'ERC20',
      'SignableMock'
    ]
  },
  etherscan: {
    apiKey: {
      rinkeby: explorerApiKey,
      avalanche: explorerApiKey,
      avalancheFujiTestnet: explorerApiKey
    }
  }
};
export default config;
