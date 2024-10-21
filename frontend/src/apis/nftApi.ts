import axios from "axios"

const BASE_URL = 'https://api.pinata.cloud/pinning'

//== 계약서 업로드 ==//
export const contractUpload = async (formData: FormData): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/pinFileToIPFS`,
    headers: ***REMOVED***
      'pinata_api_key': import.meta.env.VITE_PINATA_API_KEY,
      'pinata_secret_api_key': import.meta.env.VITE_PINATA_SECRET_API_KEY,
    ***REMOVED***,
    data: formData
  ***REMOVED***);

  console.log(response.data);
***REMOVED***;

//== 계약서 JSON 업로드 ==//
export const metadataUpload = async (imageCID: string): Promise<void> => ***REMOVED***
  const metadata = ***REMOVED***
    name: 'name',
    description: 'description',
    image: `https://ipfs.io/ipfs/$***REMOVED***imageCID***REMOVED***`
  ***REMOVED***;

  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/pinJSONToIPFS`,
    headers: ***REMOVED***
      'pinata_api_key': import.meta.env.VITE_PINATA_API_KEY,
      'pinata_secret_api_key': import.meta.env.VITE_PINATA_SECRET_API_KEY,
    ***REMOVED***,
    data: metadata
  ***REMOVED***);

  console.log(response.data)
***REMOVED***;
