import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/schedules';

//== 일정 등록 ==//
export const schedule = async (data: any): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 일정 조회 ==//
export const getSchedule = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;