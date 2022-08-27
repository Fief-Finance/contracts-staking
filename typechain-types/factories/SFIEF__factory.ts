/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SFIEF, SFIEFInterface } from "../SFIEF";

const _abi = [
  {
    name: "CommitOwnership",
    inputs: [
      {
        type: "address",
        name: "admin",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "ApplyOwnership",
    inputs: [
      {
        type: "address",
        name: "admin",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Deposit",
    inputs: [
      {
        type: "address",
        name: "provider",
        indexed: true,
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
      },
      {
        type: "uint256",
        name: "locktime",
        indexed: true,
      },
      {
        type: "int128",
        name: "type",
        indexed: false,
      },
      {
        type: "uint256",
        name: "ts",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Withdraw",
    inputs: [
      {
        type: "address",
        name: "provider",
        indexed: true,
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
      },
      {
        type: "uint256",
        name: "ts",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Supply",
    inputs: [
      {
        type: "uint256",
        name: "prevSupply",
        indexed: false,
      },
      {
        type: "uint256",
        name: "supply",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "token_addr",
      },
      {
        type: "string",
        name: "_name",
      },
      {
        type: "string",
        name: "_symbol",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    name: "commit_transfer_ownership",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37568,
  },
  {
    name: "apply_transfer_ownership",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 38407,
  },
  {
    name: "commit_smart_wallet_checker",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 36278,
  },
  {
    name: "apply_smart_wallet_checker",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37005,
  },
  {
    name: "get_last_user_slope",
    outputs: [
      {
        type: "int128",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 2540,
  },
  {
    name: "user_point_history__ts",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_addr",
      },
      {
        type: "uint256",
        name: "_idx",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1643,
  },
  {
    name: "locked__end",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_addr",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1564,
  },
  {
    name: "checkpoint",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37118215,
  },
  {
    name: "deposit_for",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_addr",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 74411056,
  },
  {
    name: "create_lock",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_value",
      },
      {
        type: "uint256",
        name: "_unlock_time",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 74412397,
  },
  {
    name: "increase_amount",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_value",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 74411818,
  },
  {
    name: "increase_unlock_time",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_unlock_time",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 74412465,
  },
  {
    name: "withdraw",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37289006,
  },
  {
    name: "balanceOf",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "balanceOf",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
      {
        type: "uint256",
        name: "_t",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "balanceOfAt",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
      {
        type: "uint256",
        name: "_block",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 509566,
  },
  {
    name: "totalSupply",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "totalSupply",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "t",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "totalSupplyAt",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "_block",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 879507,
  },
  {
    name: "token",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1721,
  },
  {
    name: "supply",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1751,
  },
  {
    name: "locked",
    outputs: [
      {
        type: "int128",
        name: "amount",
      },
      {
        type: "uint256",
        name: "end",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 3230,
  },
  {
    name: "epoch",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1811,
  },
  {
    name: "point_history",
    outputs: [
      {
        type: "int128",
        name: "bias",
      },
      {
        type: "int128",
        name: "slope",
      },
      {
        type: "uint256",
        name: "ts",
      },
      {
        type: "uint256",
        name: "blk",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 5148,
  },
  {
    name: "user_point_history",
    outputs: [
      {
        type: "int128",
        name: "bias",
      },
      {
        type: "int128",
        name: "slope",
      },
      {
        type: "uint256",
        name: "ts",
      },
      {
        type: "uint256",
        name: "blk",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
      {
        type: "uint256",
        name: "arg1",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 5393,
  },
  {
    name: "user_point_epoch",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 2116,
  },
  {
    name: "slope_changes",
    outputs: [
      {
        type: "int128",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 2046,
  },
  {
    name: "name",
    outputs: [
      {
        type: "string",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 8363,
  },
  {
    name: "symbol",
    outputs: [
      {
        type: "string",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 7416,
  },
  {
    name: "decimals",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2021,
  },
  {
    name: "future_smart_wallet_checker",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2051,
  },
  {
    name: "smart_wallet_checker",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2081,
  },
  {
    name: "admin",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2111,
  },
  {
    name: "future_admin",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2141,
  },
];

const _bytecode =
  "0x6f7fffffffffffffffffffffffffffffff6040526060612e4f610140396020612e4f60c03960c05160a01c1561003457600080fd5b606060206020612e4f0160c03960c051612e4f016101a039604060206020612e4f0160c03960c05160040135111561006b57600080fd5b604060206040612e4f0160c03960c051612e4f0161022039602060206040612e4f0160c03960c0516004013511156100a257600080fd5b33600d5561014051600055436003600460c052602060c02060c052602060c0200155426002600460c052602060c02060c052602060c02001556020610300600463313ce5676102a0526102bc610140515afa6100fd57600080fd5b601f3d1161010a57600080fd5b600050610300516102805260ff61028051111561012657600080fd5b61028051600a556101a080600860c052602060c020602082510161012060006003818352015b8261012051602002111561015f57610181565b61012051602002850151610120518501555b815160010180835281141561014c575b50505050505061022080600960c052602060c020602082510161012060006002818352015b826101205160200211156101b9576101db565b61012051602002850151610120518501555b81516001018083528114156101a6575b505050505050612e3756341561000a57600080fd5b600436101561001857612c4b565b600035601c526f7fffffffffffffffffffffffffffffff604052636b441a4060005114156100945760043560a01c1561005057600080fd5b600d54331461005e57600080fd5b600435600e55600435610140527f2f56810a6bf40af059b96d3aea4db54081f378029a518390491093a7b67032e96020610140a1005b636a1c05ae60005114156100ff57600d5433146100b057600080fd5b600e5461014052600061014051186100c757600080fd5b61014051600d5561014051610160527febee2d5739011062cb4f14113f3b36bf0ffe3da5c0568f64189d1012a11891056020610160a1005b6357f901e260005114156101335760043560a01c1561011d57600080fd5b600d54331461012b57600080fd5b600435600b55005b638e5b490f600051141561015757600d54331461014f57600080fd5b600b54600c55005b600015610241575b61016052610140523261014051181561023b57600c546101805260006101805118156101d1576020610220602463c23697a86101a052610140516101c0526101bc6000610180515af16101b157600080fd5b601f3d116101be57600080fd5b60005061022051156101d05761016051565b5b6308c379a06101a05260206101c05260256101e0527f536d61727420636f6e7472616374206465706f7369746f7273206e6f7420616c610200527f6c6f776564000000000000000000000000000000000000000000000000000000610220526101e05060846101bcfd5b61016051565b637c74a17460005114156102b85760043560a01c1561025f57600080fd5b600660043560e05260c052604060c0205461014052600161014051633b9aca00811061028a57600080fd5b600560043560e05260c052604060c02060c052602060c0200160c052602060c020015460005260206000f350005b63da020a1860005114156103195760043560a01c156102d657600080fd5b6002602435633b9aca0081106102eb57600080fd5b600560043560e05260c052604060c02060c052602060c0200160c052602060c020015460005260206000f350005b63adc63589600051141561035e5760043560a01c1561033757600080fd5b6001600260043560e05260c052604060c02060c052602060c020015460005260206000f350005b600015610be6575b6101e0526101405261016052610180526101a0526101c052610140366102003760035461034052600061014051181561053557426101805111156103b057600061016051136103b3565b60005b1561043c57610160516303c26700808205808060008112156103d157195b607f1c156103de57600080fd5b90509050905061022052610220516101805142808210156103fe57600080fd5b8082039050905060405181111561041457600080fd5b8082028080600081121561042457195b607f1c1561043157600080fd5b905090509050610200525b426101c05111156104535760006101a05113610456565b60005b156104df576101a0516303c267008082058080600081121561047457195b607f1c1561048157600080fd5b9050905090506102a0526102a0516101c05142808210156104a157600080fd5b808203905090506040518111156104b757600080fd5b808202808060008112156104c757195b607f1c156104d457600080fd5b905090509050610280525b60076101805160e05260c052604060c020546103005260006101c051181561053457610180516101c051141561051c576103005161032052610533565b60076101c05160e05260c052604060c02054610320525b5b5b61036060008152600081602001524281604001524381606001525060006103405111156105cc57610360610340516c01431e0fae6d7217caa0000000811061057c57600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c0200154826060015250505b6103a0516103e0526104006103608051825280602001518260200152806040015182604001528060600151826060015250506000610480526103a05142111561067b57670de0b6b3a7640000436103c0518082101561062a57600080fd5b80820390509050808202821582848304141761064557600080fd5b80905090509050426103a0518082101561065e57600080fd5b80820390509050808061067057600080fd5b820490509050610480525b6103e05162093a808082049050905062093a8080820282158284830414176106a257600080fd5b809050905090506104a0526104c0600060ff818352015b6104a0805162093a808181830110156106d157600080fd5b8082019050905081525060006104e052426104a05111156106f657426104a05261070d565b60076104a05160e05260c052604060c020546104e0525b6103608051610380516104a0516103e0518082101561072b57600080fd5b8082039050905060405181111561074157600080fd5b8082028080600081121561075157195b607f1c1561075e57600080fd5b9050905090508082038080600081121561077457195b607f1c1561078157600080fd5b90509050905081525061038080516104e051808201808060008112156107a357195b607f1c156107b057600080fd5b90509050905081525060006103605112156107cc576000610360525b60006103805112156107df576000610380525b6104a0516103e0526104a0516103a05261046051610480516104a051610440518082101561080c57600080fd5b80820390509050808202821582848304141761082757600080fd5b80905090509050670de0b6b3a76400008082049050905081818301101561084d57600080fd5b808201905090506103c0526103408051600181818301101561086e57600080fd5b80820190509050815250426104a051141561089157436103c0526108fa566108e9565b610340516c01431e0fae6d7217caa000000081106108ae57600080fd5b600460c052602060c0200160c052602060c0206103608051825580602001516001830155806040015160028301558060600151600383015550505b5b81516001018083528114156106b9575b50506103405160035560006101405118156109e25761038080516102a051610220518082038080600081121561092c57195b607f1c1561093957600080fd5b9050905090508082018080600081121561094f57195b607f1c1561095c57600080fd5b905090509050815250610360805161028051610200518082038080600081121561098257195b607f1c1561098f57600080fd5b905090509050808201808060008112156109a557195b607f1c156109b257600080fd5b90509050905081525060006103805112156109ce576000610380525b60006103605112156109e1576000610360525b5b610340516c01431e0fae6d7217caa000000081106109ff57600080fd5b600460c052602060c0200160c052602060c0206103608051825580602001516001830155806040015160028301558060600151600383015550506000610140511815610be05742610180511115610ad45761030080516102205180820180806000811215610a6957195b607f1c15610a7657600080fd5b905090509050815250610180516101c0511415610abd5761030080516102a05180820380806000811215610aa657195b607f1c15610ab357600080fd5b9050905090508152505b6103005160076101805160e05260c052604060c020555b426101c0511115610b3457610180516101c0511115610b335761032080516102a05180820380806000811215610b0657195b607f1c15610b1357600080fd5b9050905090508152506103205160076101c05160e05260c052604060c020555b5b60066101405160e05260c052604060c020546001818183011015610b5757600080fd5b808201905090506104c0526104c05160066101405160e05260c052604060c02055426102c052436102e0526104c051633b9aca008110610b9657600080fd5b60056101405160e05260c052604060c02060c052602060c0200160c052602060c0206102808051825580602001516001830155806040015160028301558060600151600383015550505b6101e051565b600015610e8e575b610200526101405261016052610180526101a0526101c0526101e0526102206101a080518252806020015182602001525050600154610260526102605161016051818183011015610c3e57600080fd5b8082019050905060015561028061022080518252806020015182602001525050610220805161016051604051811115610c7657600080fd5b80820180806000811215610c8657195b607f1c15610c9357600080fd5b9050905090508152506000610180511815610cb15761018051610240525b60026101405160e05260c052604060c02060c052602060c020610220805182558060200151600183015550506101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051610140516102c0526102e061028080518252806020015182602001525050610320610220805182528060200151826020015250506103405161032051610300516102e0516102c05160065801610366565b6102a05261028052610260526102405261022052610200526101e0526101c0526101a0526101805261016052610140526000506000610160511815610df357602061038060646323b872dd6102c052610140516102e052306103005261016051610320526102dc60006000545af1610dd557600080fd5b601f3d11610de257600080fd5b60005061038051610df257600080fd5b5b610160516102c0526101e0516102e052426103005261024051610140517f4566dfc29f6f11d13a418c26a02bef7c28bae749d4de47e4e6a7cddea6730d5960606102c0a3610260516102c0526102605161016051818183011015610e5657600080fd5b808201905090506102e0527f5e2aa66efd74cce82b21852e317e5490d9ecc9e6bb953ae24d90851258cc2f5c60406102c0a161020051565b63c2c4c5c16000511415610f1e5760403661014037604036610180376101405161016051610180516101a05160006101c0526101e061014080518252806020015182602001525050610220610180805182528060200151826020015250506102405161022051610200516101e0516101c05160065801610366565b6101a052610180526101605261014052600050005b633a46273e60005114156110e65762ffffff5415610f3b57600080fd5b600162ffffff5560043560a01c15610f5257600080fd5b610140600260043560e05260c052604060c0208060c052602060c02054825260018160c052602060c020015482602001525050600060243511610f9457600080fd5b600061014051131515610fe6576308c379a06101805260206101a05260166101c0527f4e6f206578697374696e67206c6f636b20666f756e64000000000000000000006101e0526101c050606461019cfd5b426101605111151561105c576308c379a06101805260206101a05260246101c0527f43616e6e6f742061646420746f2065787069726564206c6f636b2e20576974686101e0527f6472617700000000000000000000000000000000000000000000000000000000610200526101c050608461019cfd5b6101405161016051600435610180526024356101a05260006101c0526101e0600260043560e05260c052604060c0208060c052602060c02054825260018160c052602060c02001548260200152505060006102205261022051610200516101e0516101c0516101a0516101805160065801610bee565b6101605261014052600050600062ffffff55005b6365fc387360005114156113385762ffffff541561110357600080fd5b600162ffffff553361014052610140516006580161015f565b60005060243562093a808082049050905062093a80808202821582848304141761114557600080fd5b809050905090506101405261016060023360e05260c052604060c0208060c052602060c02054825260018160c052602060c02001548260200152505060006004351161119057600080fd5b610160511515156111e0576308c379a06101a05260206101c05260196101e0527f5769746864726177206f6c6420746f6b656e7320666972737400000000000000610200526101e05060646101bcfd5b4261014051111515611256576308c379a06101a05260206101c05260266101e0527f43616e206f6e6c79206c6f636b20756e74696c2074696d6520696e2074686520610200527f6675747572650000000000000000000000000000000000000000000000000000610220526101e05060846101bcfd5b426303c2670081818301101561126b57600080fd5b8082019050905061014051111515156112c3576308c379a06101a05260206101c052601e6101e0527f566f74696e67206c6f636b2063616e2062652032207965617273206d61780000610200526101e05060646101bcfd5b610140516101605161018051336101a0526004356101c052610140516101e052610200610160805182528060200151826020015250506001610240526102405161022051610200516101e0516101c0516101a05160065801610bee565b610180526101605261014052600050600062ffffff55005b634957677c60005114156114e45762ffffff541561135557600080fd5b600162ffffff553361014052610140516006580161015f565b60005061014060023360e05260c052604060c0208060c052602060c02054825260018160c052602060c0200154826020015250506000600435116113b157600080fd5b600061014051131515611403576308c379a06101805260206101a05260166101c0527f4e6f206578697374696e67206c6f636b20666f756e64000000000000000000006101e0526101c050606461019cfd5b4261016051111515611479576308c379a06101805260206101a05260246101c0527f43616e6e6f742061646420746f2065787069726564206c6f636b2e20576974686101e0527f6472617700000000000000000000000000000000000000000000000000000000610200526101c050608461019cfd5b610140516101605133610180526004356101a05260006101c0526101e06101408051825280602001518260200152505060026102205261022051610200516101e0516101c0516101a0516101805160065801610bee565b6101605261014052600050600062ffffff55005b63eff7a61260005114156117575762ffffff541561150157600080fd5b600162ffffff553361014052610140516006580161015f565b60005061014060023360e05260c052604060c0208060c052602060c02054825260018160c052602060c02001548260200152505060043562093a808082049050905062093a80808202821582848304141761157457600080fd5b809050905090506101805242610160511115156115d0576308c379a06101a05260206101c052600c6101e0527f4c6f636b20657870697265640000000000000000000000000000000000000000610200526101e05060646101bcfd5b600061014051131515611622576308c379a06101a05260206101c05260116101e0527f4e6f7468696e67206973206c6f636b6564000000000000000000000000000000610200526101e05060646101bcfd5b6101605161018051111515611676576308c379a06101a05260206101c052601f6101e0527f43616e206f6e6c7920696e637265617365206c6f636b206475726174696f6e00610200526101e05060646101bcfd5b426303c2670081818301101561168b57600080fd5b8082019050905061018051111515156116e3576308c379a06101a05260206101c052601e6101e0527f566f74696e67206c6f636b2063616e2062652032207965617273206d61780000610200526101e05060646101bcfd5b610140516101605161018051336101a05260006101c052610180516101e052610200610140805182528060200151826020015250506003610240526102405161022051610200516101e0516101c0516101a05160065801610bee565b610180526101605261014052600050600062ffffff55005b633ccfd60b60005114156119e05762ffffff541561177457600080fd5b600162ffffff5561014060023360e05260c052604060c0208060c052602060c02054825260018160c052602060c0200154826020015250506101605142101515156117fe576308c379a06101805260206101a05260166101c0527f546865206c6f636b206469646e277420657870697265000000000000000000006101e0526101c050606461019cfd5b61014051600081121561181057600080fd5b610180526101a06101408051825280602001518260200152505060006101605260006101405260023360e05260c052604060c02060c052602060c020610140805182558060200151600183015550506001546101e0526101e051610180518082101561187b57600080fd5b808203905090506001556101405161016051610180516101a0516101c0516101e05133610200526102206101a08051825280602001518260200152505061026061014080518252806020015182602001525050610280516102605161024051610220516102005160065801610366565b6101e0526101c0526101a05261018052610160526101405260005060206102a0604463a9059cbb610200523361022052610180516102405261021c60006000545af161193657600080fd5b601f3d1161194357600080fd5b6000506102a05161195357600080fd5b61018051610200524261022052337ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5686040610200a26101e051610200526101e05161018051808210156119a557600080fd5b80820390509050610220527f5e2aa66efd74cce82b21852e317e5490d9ecc9e6bb953ae24d90851258cc2f5c6040610200a1600062ffffff55005b600015611af5575b61018052610140526101605260006101a052610160516101c0526101e060006080818352015b6101c0516101a051101515611a2257611ae1565b6101a0516101c051818183011015611a3957600080fd5b808201905090506001818183011015611a5157600080fd5b8082019050905060028082049050905061020052610140516003610200516c01431e0fae6d7217caa00000008110611a8857600080fd5b600460c052602060c0200160c052602060c0200154111515611ab157610200516101a052611ad0565b61020051600180821015611ac457600080fd5b808203905090506101c0525b5b8151600101808352811415611a0e575b50506101a051600052600051610180515650005b6370a082316000511415611b0d574261014052611b32565b62fdd58e6000511415611b2a576020602461014037600050611b32565b600015611c93575b60043560a01c15611b4257600080fd5b600660043560e05260c052604060c0205461016052610160511515611b7157600060005260206000f350611c91565b61018061016051633b9aca008110611b8857600080fd5b600560043560e05260c052604060c02060c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c02001548260600152505061018080516101a051610140516101c05180821015611c0357600080fd5b80820390509050604051811115611c1957600080fd5b80820280806000811215611c2957195b607f1c15611c3657600080fd5b90509050905080820380806000811215611c4c57195b607f1c15611c5957600080fd5b9050905090508152506000610180511215611c75576000610180525b610180516000811215611c8757600080fd5b60005260206000f3505b005b634ee2cd7e600051141561216c5760043560a01c15611cb157600080fd5b436024351115611cc057600080fd5b600061014052600660043560e05260c052604060c020546101605261018060006080818352015b6101605161014051101515611cfb57611dbe565b6101405161016051818183011015611d1257600080fd5b808201905090506001818183011015611d2a57600080fd5b808201905090506002808204905090506101a05260243560036101a051633b9aca008110611d5757600080fd5b600560043560e05260c052604060c02060c052602060c0200160c052602060c0200154111515611d8e576101a05161014052611dad565b6101a051600180821015611da157600080fd5b80820390509050610160525b5b8151600101808352811415611ce7575b505061018061014051633b9aca008110611dd757600080fd5b600560043560e05260c052604060c02060c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c020015482606001525050600354610200526101405161016051610180516101a0516101c0516101e05161020051610220516024356102405261020051610260526102605161024051600658016119e8565b6102c05261022052610200526101e0526101c0526101a0526101805261016052610140526102c05161022052610240610220516c01431e0fae6d7217caa00000008110611ec757600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c0200154826060015250506040366102c03761020051610220511015611ff757610300610220516001818183011015611f4357600080fd5b808201905090506c01431e0fae6d7217caa00000008110611f6357600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c020015482606001525050610360516102a05180821015611fc757600080fd5b808203905090506102c052610340516102805180821015611fe757600080fd5b808203905090506102e052612032565b436102a0518082101561200957600080fd5b808203905090506102c05242610280518082101561202657600080fd5b808203905090506102e0525b610280516103005260006102c05118156120b45761030080516102e0516024356102a0518082101561206357600080fd5b80820390509050808202821582848304141761207e57600080fd5b809050905090506102c051808061209457600080fd5b8204905090508181830110156120a957600080fd5b808201905090508152505b61018080516101a051610300516101c051808210156120d257600080fd5b808203905090506040518111156120e857600080fd5b808202808060008112156120f857195b607f1c1561210557600080fd5b9050905090508082038080600081121561211b57195b607f1c1561212857600080fd5b90509050905081525060006101805112151561215e5761018051600081121561215057600080fd5b60005260206000f35061216a565b600060005260206000f3505b005b60001561235b575b6101e0526101405261016052610180526101a0526101c0526102006101408051825280602001518260200152806040015182604001528060600151826060015250506102405162093a808082049050905062093a8080820282158284830414176121dd57600080fd5b80905090509050610280526102a0600060ff818352015b610280805162093a8081818301101561220c57600080fd5b8082019050905081525060006102c0526101c051610280511115612237576101c0516102805261224e565b60076102805160e05260c052604060c020546102c0525b61020080516102205161028051610240518082101561226c57600080fd5b8082039050905060405181111561228257600080fd5b8082028080600081121561229257195b607f1c1561229f57600080fd5b905090509050808203808060008112156122b557195b607f1c156122c257600080fd5b9050905090508152506101c0516102805114156122de57612326565b61022080516102c051808201808060008112156122f757195b607f1c1561230457600080fd5b90509050905081525061028051610240525b81516001018083528114156121f4575b5050600061020051121561233b576000610200525b61020051600081121561234d57600080fd5b6000526000516101e0515650005b6318160ddd6000511415612373574261014052612399565b63bd85b0396000511415612391576020600461014037600050612399565b6000156124a1575b60035461016052610180610160516c01431e0fae6d7217caa000000081106123c057600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c0200154826060015250506101405161016051610180516101a0516101c0516101e0516102006101808051825280602001518260200152806040015182604001528060600151826060015250506101405161028052610280516102605161024051610220516102005160065801612174565b6102e0526101e0526101c0526101a0526101805261016052610140526102e05160005260206000f350005b63981b24d060005114156127e0574360043511156124be57600080fd5b60035461014052610140516101605160043561018052610140516101a0526101a05161018051600658016119e8565b6102005261016052610140526102005161016052610180610160516c01431e0fae6d7217caa0000000811061252157600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c020015482606001525050600061020052610140516101605110156126a25761022061016051600181818301101561259c57600080fd5b808201905090506c01431e0fae6d7217caa000000081106125bc57600080fd5b600460c052602060c020018060c052602060c02054825260018160c052602060c0200154826020015260028160c052602060c0200154826040015260038160c052602060c020015482606001525050610280516101e051181561269d576004356101e0518082101561262d57600080fd5b80820390509050610260516101c0518082101561264957600080fd5b80820390509050808202821582848304141761266457600080fd5b80905090509050610280516101e0518082101561268057600080fd5b80820390509050808061269257600080fd5b820490509050610200525b61272c565b436101e051181561272b576004356101e051808210156126c157600080fd5b80820390509050426101c051808210156126da57600080fd5b8082039050905080820282158284830414176126f557600080fd5b80905090509050436101e0518082101561270e57600080fd5b80820390509050808061272057600080fd5b820490509050610200525b5b6101405161016051610180516101a0516101c0516101e051610200516102206101808051825280602001518260200152806040015182604001528060600151826060015250506101c0516102005181818301101561278957600080fd5b808201905090506102a0526102a0516102805161026051610240516102205160065801612174565b61030052610200526101e0526101c0526101a0526101805261016052610140526103005160005260206000f350005b63fc0c546a60005114156127fc5760005460005260206000f350005b63047fc9aa60005114156128185760015460005260206000f350005b63cbf9fe5f60005114156128875760043560a01c1561283657600080fd5b600260043560e05260c052604060c0206101408080808460c052602060c0205481525050602081019050808060018560c052602060c02001548152505060409050905060c05260c051610140f39050005b63900cf0cf60005114156128a35760035460005260206000f350005b63d1febfb9600051141561294b576004356c01431e0fae6d7217caa000000081106128cd57600080fd5b600460c052602060c020016101408080808460c052602060c0205481525050602081019050808060018560c052602060c020015481525050602081019050808060028560c052602060c020015481525050602081019050808060038560c052602060c02001548152505060809050905060c05260c051610140f39050005b6328d09d476000511415612a085760043560a01c1561296957600080fd5b602435633b9aca00811061297c57600080fd5b600560043560e05260c052604060c02060c052602060c020016101408080808460c052602060c0205481525050602081019050808060018560c052602060c020015481525050602081019050808060028560c052602060c020015481525050602081019050808060038560c052602060c02001548152505060809050905060c05260c051610140f39050005b63010ae7576000511415612a425760043560a01c15612a2657600080fd5b600660043560e05260c052604060c0205460005260206000f350005b63711974846000511415612a6c57600760043560e05260c052604060c0205460005260206000f350005b6306fdde036000511415612b155760088060c052602060c020610180602082540161012060006003818352015b82610120516020021115612aac57612ace565b61012051850154610120516020028501525b8151600101808352811415612a99575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6395d89b416000511415612bbe5760098060c052602060c020610180602082540161012060006002818352015b82610120516020021115612b5557612b77565b61012051850154610120516020028501525b8151600101808352811415612b42575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63313ce5676000511415612bda57600a5460005260206000f350005b638ff36fd16000511415612bf657600b5460005260206000f350005b637175d4f76000511415612c1257600c5460005260206000f350005b63f851a4406000511415612c2e57600d5460005260206000f350005b6317f7182a6000511415612c4a57600e5460005260206000f350005b5b60006000fd5b6101e6612e37036101e66000396101e6612e37036000f3";

type SFIEFConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SFIEFConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SFIEF__factory extends ContractFactory {
  constructor(...args: SFIEFConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SFIEF";
  }

  deploy(
    token_addr: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SFIEF> {
    return super.deploy(
      token_addr,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<SFIEF>;
  }
  getDeployTransaction(
    token_addr: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_addr,
      _name,
      _symbol,
      overrides || {}
    );
  }
  attach(address: string): SFIEF {
    return super.attach(address) as SFIEF;
  }
  connect(signer: Signer): SFIEF__factory {
    return super.connect(signer) as SFIEF__factory;
  }
  static readonly contractName: "SFIEF";
  public readonly contractName: "SFIEF";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SFIEFInterface {
    return new utils.Interface(_abi) as SFIEFInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SFIEF {
    return new Contract(address, _abi, signerOrProvider) as SFIEF;
  }
}
