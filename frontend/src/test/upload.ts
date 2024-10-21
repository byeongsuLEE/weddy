import ***REMOVED*** contractUpload ***REMOVED*** from "../apis/nftApi";

export const uploadToPinata = () => ***REMOVED***
  const formData = new FormData();

  const uploadData = async (file: File) => ***REMOVED***

    formData.append('file', file);

    return await contractUpload(formData);
  ***REMOVED***;

  return ***REMOVED*** uploadData ***REMOVED***;
***REMOVED***