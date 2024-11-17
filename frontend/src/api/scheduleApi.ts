import axios from "axios";
import ***REMOVED*** GetSchedule, Schedule ***REMOVED*** from "./schedule.type";

const BASE_URL = `/api/schedules`;

//== 일정 등록 ==//
export const schedule = async (scheduleData?: Schedule): Promise<void> => ***REMOVED***
  console.log(scheduleData);
  console.log(sessionStorage.getItem("token"));
  await axios(***REMOVED***
    method: "post",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
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
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    params: ***REMOVED***
      date: selectedDate,
    ***REMOVED***,
  ***REMOVED***);
  return response.data.data;
***REMOVED***;
