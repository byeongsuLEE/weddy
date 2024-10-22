import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/users'

//== 토큰 정보 ==//
export const getToken = async (userId: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***userId***REMOVED***/token`
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 회원 정보 수정 ==//
export const editInfomation = async (info: any): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: info
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;