import ***REMOVED*** BrowserProvider ***REMOVED*** from "ethers"

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

export const digitalsign = () => ***REMOVED***
  const signature = async () => ***REMOVED***
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const message = "서명하려면 계속 진행해주세요.";
    const signature = await signer.signMessage(message);

    return signature;
  ***REMOVED***

  return ***REMOVED*** signature ***REMOVED***;
***REMOVED***