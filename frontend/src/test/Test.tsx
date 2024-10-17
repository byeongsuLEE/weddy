import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** connect ***REMOVED*** from "./initMetaMsk";

const Test = () => ***REMOVED***
  const ***REMOVED*** initMetaMask ***REMOVED*** = connect();
  const [ account, setAccount ] = useState<any>();

  const connectWallet = async () => ***REMOVED***
    const data = await initMetaMask();
    setAccount(data);
  ***REMOVED***

  return (
    <>
    <button onClick=***REMOVED***connectWallet***REMOVED***>지갑연결</button>
    <div>***REMOVED***account***REMOVED***</div>
    </>
  )
***REMOVED***
export default Test;