# FIEF Finance

This repo contains the Vyper contracts used to allow users to stake $FIEF in exchange for $sFIEF. The contracts are forked from the [CurveDAO Contracts](https://github.com/curvefi/curve-dao-contracts) with slight modifications to the [VotingEscrow contract](https://github.com/curvefi/curve-dao-contracts/blob/master/contracts/VotingEscrow.vy).

The repo contains two contracts:

1. [FeeDistributor.vy](./contracts/FeeDistributor.vy) - This contract is responsible for distributing $FIEF to stakers. It's functionality is unchanged and information on the functions can be found [here](https://curve.readthedocs.io/dao-fees.html#fee-distribution).
2. [sFIEF.vy](./contracts/sFIEF.vy) - This contract allows users to create time locks of their $FIEF in exchange for a decaying amount of $sFIEF. The contract is based on the original curveDAO [veCRV contract](https://curve.readthedocs.io/dao-vecrv.html)

The sFIEF contract has the following modifications:

- The maximum allowed staking time is set to 2 years
- 0.05%(performance fee) of the staked $FIEF is sent to a specified address once a lock has expired and the staker withdraws
- Admin is able to modify the performance fee & change the fee collector address

## Setup

1) **Deploy sFIEF**
    - Command can be taken from comment in [2-deploy-sfief.ts](./tasks/2-deploy-sfief.ts) but take care to update the fee collector address and network. The fee collector should be set to the address the performance fee should be sent to.

2) **Deploy FeeDistributor**
    - Command can be taken from comment in [3-deploy-distributor.ts](./tasks/3-deploy-distributor.ts) parms should be set as follows:
       - **vetoken**: Address of deployed sFIEF contract
       - **starttime**: Epoch time for distribution to start. Value can be calculated using ethers, get the latest block then add the duration in the future to the latestBlock.timestamp.
       - **distributiontoken**: Address of deployed FIEF contract
       - **admin**: Address of owner of the distributor contract
       - **emergency-return**: Address to send all funds to if the contract is destroyed.

3) **Funding the distributor**
    - The distributor needs to be funded every week. The distribution token
    balance is distributed proportionally to each user based on their sFIEF
    balance relative to the total sFIEF supply. The actual distribution occurrs
    at the end of the week, so users that create locks should expect to recieve their
    first payout at the end of the following epoch week. Funding is achieved by calling
    the burn function, which can also be called by anyone and will transfer the total
    balance of FIEF to the distributor.

4) **Checkpoints**
    - The token checkpint tracks the balance of FIEF within the distributor to
    determine the amount to distribute in the given week. To create a checkpoint call the checkpoint_token function. The first call can only be called by admin but subsequent calls can be made by anyone.