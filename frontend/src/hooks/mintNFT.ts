import ***REMOVED*** BrowserProvider, ethers ***REMOVED*** from "ethers";
import MyNFT from '@/hooks/contracts/MyNFT.json';

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

export const mintNFT = async (CID?: string) => ***REMOVED***
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const metadataURI = `https://fuchsia-changing-flamingo-499.mypinata.cloud/ipfs/$***REMOVED***CID***REMOVED***`;
  const contractABI = MyNFT.abi;

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const transaction = await contract.mint(await signer.getAddress(), metadataURI);

  await transaction.wait();
***REMOVED***