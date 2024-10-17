import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

export const connect = () => ***REMOVED***
  //==  연결된 계정 확인하기 ==//
  const getAccounts = async (Web3: Web3) => ***REMOVED***
    const accounts = await Web3.eth.getAccounts();
    console.log('연결된 계정 : ', accounts[0]);

    return accounts;
  ***REMOVED***

  //== 지갑 연결 확인하기 ==//
  const initMetaMask = async () => ***REMOVED***
    const provider = (await detectEthereumProvider()) as any;
  
    if (provider) ***REMOVED***
      const web3 = new Web3(provider);
      
      try ***REMOVED***
        await provider.request(***REMOVED*** method: 'eth_requestAccounts' ***REMOVED***);
        console.log('MetaMask 연결 성공');

        const account = await getAccounts(web3);

        return account;

      ***REMOVED*** catch (error) ***REMOVED***
        console.error('사용자가 MetaMask 연결을 거부했습니다.');

        return '연결을 거부했습니다.';
      ***REMOVED***

    ***REMOVED*** else ***REMOVED***
      console.error('MetaMask가 설치되지 않았습니다.');
      return 'MetaMask가 설치되지 않았습니다.';
    ***REMOVED***
  ***REMOVED***;

  return ***REMOVED*** initMetaMask ***REMOVED***;
***REMOVED***
