import axios from "axios"

const BASE_URL = 'http://localhost:8080/api'

//== 계약서 정보 가져오기 ==//
export const contractInfo = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);

  console.log(response.data);
***REMOVED***

//== 계약서 전자서명 ==//
export const sign = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);

  console.log(response.data);
***REMOVED***