import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** wallet ***REMOVED*** from "./metaMask";
import ***REMOVED*** digitalsign ***REMOVED*** from "./digitalSign";
const Test = () => ***REMOVED***
  const ***REMOVED*** connectWallet ***REMOVED*** = wallet();
  const ***REMOVED*** signature ***REMOVED*** = digitalsign();
  const [ sign, setSign ] = useState<any>();
  const [ account, setAccount ] = useState<any>();
  
  const handleConnect = async () => ***REMOVED***
    const data = await connectWallet();
    setAccount(data);
  ***REMOVED***

  const handleSignature = async () => ***REMOVED***
    const data = await signature();
    setSign(data);
  ***REMOVED***

  return (
    <>
    <button onClick=***REMOVED***handleConnect***REMOVED***>지갑연결</button>
    <div>지갑 주소 : ***REMOVED***account***REMOVED***</div>

    <button onClick=***REMOVED***handleSignature***REMOVED***>전자서명 요청</button>
    <div>전자서명 값 : ***REMOVED***sign***REMOVED***</div>
    </>
  )
***REMOVED***
export default Test;