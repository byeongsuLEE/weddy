import ***REMOVED*** BrowserProvider ***REMOVED*** from "ethers"

interface WindowWithEthereum extends Window ***REMOVED***
  ethereum?: any;
***REMOVED***

declare let window: WindowWithEthereum;

export const makeSignature = async () => ***REMOVED***
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const message = "서명을 완료하려면 계속 진행해주세요.";

  await signer.signMessage(message);
***REMOVED***