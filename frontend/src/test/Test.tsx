import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** wallet ***REMOVED*** from "./metaMask";
const Test = () => ***REMOVED***
  const ***REMOVED*** connectWallet ***REMOVED*** = wallet();
  const [ account, setAccount ] = useState<any>();

  const handleConnect = async () => ***REMOVED***
    const data = await connectWallet();
    setAccount(data);
  ***REMOVED***

  return (
    <>
    <button onClick=***REMOVED***handleConnect***REMOVED***>지갑연결</button>
    <div>지갑 주소 : ***REMOVED***account***REMOVED***</div>
    </>
  )
***REMOVED***
export default Test;