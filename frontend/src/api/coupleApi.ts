import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/users'

//== 커플 코드 조회 ==//
export const getCoupleCode = async (): Promise<string> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/couple-code`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***
  ***REMOVED***);
  return response.data.data.coupleCode;
***REMOVED***

//== 커플 코드 연결 ==//
export const connectCoupleCode = async (code: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/couple-connect`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
    data: code
  ***REMOVED***);
  console.log(response.data);
***REMOVED***