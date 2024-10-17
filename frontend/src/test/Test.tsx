import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** wallet ***REMOVED*** from "./metaMask";
import ***REMOVED*** digitalsign ***REMOVED*** from "./digitalSign";
import ***REMOVED*** makeNFT ***REMOVED*** from "./nftMinting";

const Test = () => ***REMOVED***
  const ***REMOVED*** connectWallet ***REMOVED*** = wallet();
  const ***REMOVED*** signature ***REMOVED*** = digitalsign();
  const ***REMOVED*** mintNFT ***REMOVED*** = makeNFT();

  const [ sign, setSign ] = useState<any>();
  const [ account, setAccount ] = useState<any>();
  const [ mint, setMint ] = useState<any>();
  
  const handleConnect = async () => ***REMOVED***
    const data = await connectWallet();
    setAccount(data);
  ***REMOVED***

  const handleSignature = async () => ***REMOVED***
    const data = await signature();
    setSign(data);
  ***REMOVED***

  const handleMiniting = async () => ***REMOVED***
    const data = await mintNFT();
    setMint(data);
  ***REMOVED***

  return (
    <>
    <button onClick=***REMOVED***handleConnect***REMOVED***>지갑연결</button>
    <div>지갑 주소 : ***REMOVED***account***REMOVED***</div>

    <button onClick=***REMOVED***handleSignature***REMOVED***>전자서명 요청</button>
    <div>전자서명 값 : ***REMOVED***sign***REMOVED***</div>

    <button onClick=***REMOVED***handleMiniting***REMOVED***>NFT Minting</button>
    <div>mint : ***REMOVED***mint***REMOVED***</div>
    </>
  )
***REMOVED***
export default Test;