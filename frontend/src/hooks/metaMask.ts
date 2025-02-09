import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

export const wallet = () => {
  //==  연결된 계정 확인하기 ==//
  const getAccounts = async (Web3: Web3) => {
    const accounts = await Web3.eth.getAccounts();

    return accounts;
  }

  //== 지갑 연결 확인하기 ==//
  const connectWallet = async () => {
    const provider = (await detectEthereumProvider()) as any;
  
    if (provider) {
      const web3 = new Web3(provider);
      
      try {
        await provider.request({ method: 'eth_requestAccounts' });

        const account = await getAccounts(web3);

        return account;

      } catch (error) {

        return '연결을 거부했습니다.';
      }

    } else {
      return 'MetaMask가 설치되지 않았습니다.';
    }
  };

  return { connectWallet };
}
