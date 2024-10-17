import axios from "axios"

const BASE_URL = 'http://localhost:8080/api'

//== 드레스 리스트 ==//
export const dressList = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  
  console.log(response.data);
***REMOVED***

//== 메이크업 리스트 ==//
export const makeupList = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);

  console.log(response.data);
***REMOVED***