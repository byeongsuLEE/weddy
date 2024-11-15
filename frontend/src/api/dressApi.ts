import axios from "axios";
import ***REMOVED*** Dress ***REMOVED*** from "./dress.type";


const URL = import.meta.env.VITE_PUBLIC_URL
const BASE_URL = `$***REMOVED***URL***REMOVED***/api/users/sketch`

// 드레스 전체 조회
export const getDressList = async (): Promise<Dress[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
  return response.data.data;
***REMOVED***

// 드레스 스케치 저장
export const saveDress = async (formData: FormData): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: "post",
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token") || "",
    ***REMOVED***,
    data: formData,
  ***REMOVED***);
***REMOVED***
