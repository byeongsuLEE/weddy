import ***REMOVED*** BrowserProvider, ethers ***REMOVED*** from "ethers";
import MyNFT from '../../../blockchain/NFT/build/contracts/MyNFT.json';

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

export const mintNFT = async (CID?: string) => ***REMOVED***
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const provider = new BrowserProvider(window.ethereum);
  const metadataURI = `https://ipfs.io/ipfs/$***REMOVED***CID***REMOVED***`;
  const signer = await provider.getSigner();
  const contractABI = MyNFT.abi;

  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const transaction = await contract.mint(await signer.getAddress(), metadataURI);

  await transaction.wait();
***REMOVED***