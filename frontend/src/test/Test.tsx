import React, ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** wallet ***REMOVED*** from "../hooks/metaMask";
import ***REMOVED*** signature ***REMOVED*** from "../hooks/signature";
import ***REMOVED*** getNFT ***REMOVED*** from "../hooks/getNFT";
import ***REMOVED*** uploadToPinata ***REMOVED*** from "../hooks/uploadToPinata";
import ***REMOVED*** mintNFT ***REMOVED*** from "../hooks/mintNFT";

const Test = () => ***REMOVED***
  const ***REMOVED*** connectWallet ***REMOVED*** = wallet();

  const [sign, setSign] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [file, setFile] = useState<any>();
  const [cid, setCid] = useState<string>();
  const [mint, setMint] = useState<any>();
  const [nfts, setNfts] = useState<any[]>([]);

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
    const data = await uploadToPinata(file);
    setCid(data);
  ***REMOVED***

  const handleMiniting = async () => ***REMOVED***
    const data = await mintNFT(cid);
    setMint(data);
  ***REMOVED***

  const handleNFT = async () => ***REMOVED***
    const data = await getNFT();
    console.log(data);
    setNfts(data);

  ***REMOVED***

  return (
    <>
      <button onClick=***REMOVED***handleConnect***REMOVED***>지갑연결</button>
      <div>지갑 주소 : ***REMOVED***account***REMOVED***</div>

      <button onClick=***REMOVED***handleSignature***REMOVED***>전자서명 요청</button>
      <div>전자서명 값 : ***REMOVED***sign***REMOVED***</div>

      <input type="file" onChange=***REMOVED***handleFile***REMOVED*** />
      <br />
      <button onClick=***REMOVED***handleUpload***REMOVED***>pinata 업로드</button>
      <div>CID : ***REMOVED***cid***REMOVED***</div>

      <button onClick=***REMOVED***handleMiniting***REMOVED***>NFT Minting</button>
      <div>mint : ***REMOVED***mint***REMOVED***</div>

      <button onClick=***REMOVED***handleNFT***REMOVED***>NFT 가져오기</button>
      <div>
        ***REMOVED***nfts.map((nft, index) => (
          <div key=***REMOVED***index***REMOVED***>
            <img src=***REMOVED***nft.image***REMOVED*** alt=***REMOVED***nft.name***REMOVED*** />
            <h3>***REMOVED***nft.name***REMOVED***</h3>
          </div>
        ))***REMOVED***
      </div>
    </>
  )
***REMOVED***
export default Test;