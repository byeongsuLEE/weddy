import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/users'

//== 커플 코드 조회 ==//
export const getCoupleCode = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/couple-code`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***

//== 커플 코드 연결 ==//
export const connectCoupleCode = async (code: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/couple-connect`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: code
  ***REMOVED***);
  console.log(response.data);
***REMOVED***