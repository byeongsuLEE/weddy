import axios from "axios";
import ***REMOVED*** GetSchedule, Schedule ***REMOVED*** from "./schedule.type";

const BASE_URL = "http://localhost:8080/api/schedules";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcklkIjoxLCJjb2RlIjoidXNlcjEiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.LItYgsUBpk903SstXRFKs08_mKnd7vr7hZm-TEaRYZQ';

//== 일정 등록 ==//
export const schedule = async (scheduleData?: Schedule): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: "post",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`,
    ***REMOVED***,
    data: scheduleData,
  ***REMOVED***);
***REMOVED***;

//== 일정 조회 ==//
export const getSchedule = async (selectedDate: string): Promise<GetSchedule[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`,
    ***REMOVED***,
    params: ***REMOVED***
      date: selectedDate
    ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;