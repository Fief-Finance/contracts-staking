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