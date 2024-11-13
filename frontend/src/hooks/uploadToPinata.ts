import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** contractUpload ***REMOVED*** from "../api/nftApi";

//== pinata에 업로드 후 ipfsHash 값 반환 ==//
export const uploadToPinata = async (file?: File, contract?: ContractData) => ***REMOVED***
  const formData = new FormData();

  if (file) ***REMOVED***
    formData.append('file', file);
  ***REMOVED***

  return await contractUpload(formData, contract);
***REMOVED***