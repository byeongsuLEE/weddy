import ***REMOVED*** contractUpload ***REMOVED*** from "../apis/nftApi";

//== pinata에 업로드 후 ipfsHash 값 반환 ==// => File로 수정 필요
export const uploadToPinata = async (file: any) => ***REMOVED***
  const formData = new FormData();
  formData.append('file', file);

  return await contractUpload(formData);
***REMOVED***