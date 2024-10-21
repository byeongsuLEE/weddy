import React, ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** wallet ***REMOVED*** from "./metaMask";
import ***REMOVED*** digitalsign ***REMOVED*** from "./digitalSign";
import ***REMOVED*** makeNFT ***REMOVED*** from "./nftMinting";
import ***REMOVED*** uploadToPinata ***REMOVED*** from "./upload";

const Test = () => ***REMOVED***
  const ***REMOVED*** connectWallet ***REMOVED*** = wallet();
  const ***REMOVED*** signature ***REMOVED*** = digitalsign();
  const ***REMOVED*** uploadData ***REMOVED*** = uploadToPinata();
  const ***REMOVED*** mintNFT ***REMOVED*** = makeNFT();

  const [ sign, setSign ] = useState<any>();
  const [ account, setAccount ] = useState<any>();
  const [ file, setFile ] = useState<any>();
  const [ cid, setCid ] = useState<string>();
  const [ mint, setMint ] = useState<any>();
  
  const handleConnect = async () => ***REMOVED***
    const data = await connectWallet();
    setAccount(data);
  ***REMOVED***

  const handleSignature = async () => ***REMOVED***
    const data = await signature();
    setSign(data);
  ***REMOVED***

  //== 피나타 업로드 테스트 ==//
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => ***REMOVED***
    if (event.target.files && event.target.files.length > 0) ***REMOVED***
      const data = event.target.files[0];
      setFile(data);
    ***REMOVED***
  ***REMOVED***

  const handleUpload = async () => ***REMOVED***
    const data = await uploadData(file);
    setCid(data);
  ***REMOVED***

  const handleMiniting = async () => ***REMOVED***
    const data = await mintNFT(cid);
    setMint(data);
  ***REMOVED***

  return (
    <>
    <button onClick=***REMOVED***handleConnect***REMOVED***>지갑연결</button>
    <div>지갑 주소 : ***REMOVED***account***REMOVED***</div>

    <button onClick=***REMOVED***handleSignature***REMOVED***>전자서명 요청</button>
    <div>전자서명 값 : ***REMOVED***sign***REMOVED***</div>

    <input type="file" onChange=***REMOVED***handleFile***REMOVED***/>
    <br />
    <button onClick=***REMOVED***handleUpload***REMOVED***>pinata 업로드</button>
    <div>CID : ***REMOVED***cid***REMOVED***</div>

    <button onClick=***REMOVED***handleMiniting***REMOVED***>NFT Minting</button>
    <div>mint : ***REMOVED***mint***REMOVED***</div>
    </>
  )
***REMOVED***
export default Test;