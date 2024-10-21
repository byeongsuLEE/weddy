import ***REMOVED*** BrowserProvider, ethers ***REMOVED*** from "ethers";
import MyNFT from '../../../blockchain/NFT/build/contracts/MyNFT.json';

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

export const makeNFT = () => ***REMOVED***

  const mintNFT = async (CID?: string) => ***REMOVED***
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const metadataURI = `https://ipfs.io/ipfs/$***REMOVED***CID***REMOVED***`;
    const contractABI = MyNFT.abi;

    try ***REMOVED***
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const transaction = await contract.mint(await signer.getAddress(), metadataURI);

      await transaction.wait();

      return '민팅 성공';
    ***REMOVED*** catch (err) ***REMOVED***
      console.error("Minting failed:", err);
      return '민팅 실패';
    ***REMOVED***
  ***REMOVED***

  return ***REMOVED*** mintNFT ***REMOVED***;
***REMOVED***
