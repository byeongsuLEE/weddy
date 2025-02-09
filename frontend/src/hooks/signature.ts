import { BrowserProvider } from "ethers"

interface WindowWithEthereum extends Window {
  ethereum?: any;
}

declare let window: WindowWithEthereum;

export const makeSignature = async () => {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const message = "서명을 완료하려면 계속 진행해주세요.";

  await signer.signMessage(message);
}