import ***REMOVED*** BrowserProvider, ethers ***REMOVED*** from "ethers";
import MyNFT from '@/hooks/contracts/MyNFT.json';
import detectEthereumProvider from "@metamask/detect-provider";

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

//== NFT 정보 가져온 후 화면 출력 함수 ==//
export const getNFT = async () => ***REMOVED***
  const contractAddress = '0xAD30D0d050D7071B3Ce8077ada6d9D5F907a0B08';
  const contractABI = MyNFT.abi;

  const provider = new BrowserProvider(window.ethereum);
  const addressProvider = (await detectEthereumProvider()) as any;
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const walletAddresses = await addressProvider.request(***REMOVED*** method: 'eth_requestAccounts' ***REMOVED***);
  const walletAddress = walletAddresses[0];

  const balance = await contract.balanceOf(walletAddress);
  const nftData = [];

  for (let i = 0; i < balance; i++) ***REMOVED***
      const tokenId = await contract.tokenOfOwnerByIndex(walletAddress, i);
      const tokenURI = await contract.tokenURI(tokenId);
      const finalTokenURI = tokenURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");

      try ***REMOVED***
          const response = await fetch(finalTokenURI, ***REMOVED*** method: 'GET' ***REMOVED***);
          if (!response.ok) ***REMOVED***
              throw new Error(`HTTP error! Status: $***REMOVED***response.status***REMOVED***`);
          ***REMOVED***
          const metadata = await response.json();
          nftData.push(metadata);
      ***REMOVED*** catch (error) ***REMOVED***
          console.error(`Failed to fetch metadata for tokenId $***REMOVED***tokenId***REMOVED***:`, error);
      ***REMOVED***
  ***REMOVED***

  return nftData;
***REMOVED***
