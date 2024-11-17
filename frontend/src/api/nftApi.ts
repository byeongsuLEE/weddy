import axios from "axios"
import ***REMOVED*** ContractData ***REMOVED*** from "./contract.type";

const BASE_URL = 'https://api.pinata.cloud/pinning'

//== 계약서 업로드 ==//
export const contractUpload = async (formData: FormData, contract?: ContractData): Promise<string> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/pinFileToIPFS`,
    headers: ***REMOVED***
      'pinata_api_key': '***REMOVED***',
      'pinata_secret_api_key': '***REMOVED***',
    ***REMOVED***,
    data: formData
  ***REMOVED***);

  const ipfsHash = response.data.IpfsHash;

  //== json 업로드 ==//
  return await metadataUpload(ipfsHash, contract);
***REMOVED***;

//== 계약서 JSON 업로드 ==//
export const metadataUpload = async (imageCID: string, contract?: ContractData): Promise<string> => ***REMOVED***
  if (!contract) ***REMOVED***
    return '';
  ***REMOVED***

  const metadata = ***REMOVED***
    name: contract.product.productName,
    description: contract.product.productContent,
    contractId: contract.id,
    type: contract.product.type,
    image: `https://fuchsia-changing-flamingo-499.mypinata.cloud/ipfs/$***REMOVED***imageCID***REMOVED***`
  ***REMOVED***;

  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/pinJSONToIPFS`,
    headers: ***REMOVED***
      'pinata_api_key': '***REMOVED***',
      'pinata_secret_api_key': '***REMOVED***',
    ***REMOVED***,
    data: metadata
  ***REMOVED***);

  return response.data.IpfsHash;
***REMOVED***;
