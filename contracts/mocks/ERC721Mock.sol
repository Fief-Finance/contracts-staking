// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract ERC721Mock is ERC721PresetMinterPauserAutoId {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialMint
    ) ERC721PresetMinterPauserAutoId(name, symbol, "mockUri") {
        _setRoleAdmin(MINTER_ROLE, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(PAUSER_ROLE, DEFAULT_ADMIN_ROLE);
        _setupRole(MINTER_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
        for (uint256 index = 0; index < initialMint; index++) {
            mint(msg.sender);
        }
    }
}
