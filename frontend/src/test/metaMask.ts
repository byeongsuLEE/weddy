import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

export const wallet = () => ***REMOVED***
  //==  연결된 계정 확인하기 ==//
  const getAccounts = async (Web3: Web3) => ***REMOVED***
    const accounts = await Web3.eth.getAccounts();

    return accounts;
  ***REMOVED***

  //== 지갑 연결 확인하기 ==//
  const connectWallet = async () => ***REMOVED***
    const provider = (await detectEthereumProvider()) as any;
  
    if (provider) ***REMOVED***
      const web3 = new Web3(provider);
      
      try ***REMOVED***
        await provider.request(***REMOVED*** method: 'eth_requestAccounts' ***REMOVED***);

        const account = await getAccounts(web3);

        return account;

      ***REMOVED*** catch (error) ***REMOVED***

        return '연결을 거부했습니다.';
      ***REMOVED***

    ***REMOVED*** else ***REMOVED***
      return 'MetaMask가 설치되지 않았습니다.';
    ***REMOVED***
  ***REMOVED***;

  return ***REMOVED*** connectWallet ***REMOVED***;
***REMOVED***
