import ***REMOVED*** contractUpload ***REMOVED*** from "../apis/nftApi";

//== pinata에 업로드 후 ipfsHash 값 반환 ==//
export const uploadToPinata = async (file?: File, category?: string) => ***REMOVED***
  const formData = new FormData();

  if (file)***REMOVED***
    formData.append('file', file);
  ***REMOVED***
  
  return await contractUpload(formData, category);
***REMOVED***