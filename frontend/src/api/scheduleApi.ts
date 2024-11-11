import axios from "axios";
import ***REMOVED*** GetSchedule, Schedule ***REMOVED*** from "./schedule.type";

const BASE_URL = "http://localhost:8082/api/schedules";

//== 일정 등록 ==//
export const schedule = async (scheduleData?: Schedule): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "post",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    data: scheduleData
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 일정 조회 ==//
export const getSchedule = async (selectedDate: string): Promise<GetSchedule[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    params: ***REMOVED***
      date: selectedDate
    ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;