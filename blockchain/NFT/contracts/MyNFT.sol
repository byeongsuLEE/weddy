// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, ERC721Enumerable, Ownable ***REMOVED***
    uint256 public nextTokenId;

    // NFT 민팅 시 이벤트
    event Minted(address recipient, uint256 tokenId, string tokenURI);

    constructor() ERC721("MyNFT", "MNFT") ***REMOVED******REMOVED***

    // 누구나 민팅 가능한 기능으로 수정
    function mint(address recipient, string memory _tokenURI) external ***REMOVED***
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        
        // 민팅 이벤트 발생
        emit Minted(recipient, tokenId, _tokenURI);
    ***REMOVED***

    // 소유한 토큰 ID 반환 함수 (ERC721Enumerable 필요)
    function tokensOfOwner(address owner) external view returns (uint256[] memory) ***REMOVED***
        uint256 tokenCount = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) ***REMOVED***
            tokenIds[i] = tokenOfOwnerByIndex(owner, i);
        ***REMOVED***
        return tokenIds;
    ***REMOVED***

    // 토큰 URI를 반환하는 함수
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) ***REMOVED***
        require(_exists(tokenId), "Token does not exist.");
        return super.tokenURI(tokenId);
    ***REMOVED***

    // _beforeTokenTransfer 함수 오버라이드 (ERC721 및 ERC721Enumerable 상속)
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721Enumerable) ***REMOVED***
        super._beforeTokenTransfer(from, to, tokenId);
    ***REMOVED***

    // supportsInterface 오버라이드 (ERC721 및 ERC721Enumerable 상속)
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) ***REMOVED***
        return super.supportsInterface(interfaceId);
    ***REMOVED***

    // ERC721URIStorage의 _burn 오버라이드
    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) ***REMOVED***
        super._burn(tokenId);
    ***REMOVED***
***REMOVED***
