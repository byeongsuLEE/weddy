import axios from "axios";
import ***REMOVED*** GetSchedule, Schedule ***REMOVED*** from "./schedule.type";

const BASE_URL = "http://localhost:8080/api/schedules";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwidXNlck5hbWUiOiJb6rSR7KO8XzHrsJhfYzEwM1_snbTrs5HsiJhdIiwiY29kZSI6IkczNzFSTyIsImlhdCI6MTczMDQyNDQ1MSwiZXhwIjoxNzMzMDE2NDUxfQ.R7YFdmlN-IZkTeo0veuMA4W2eW_9-dXJJ-pGU8SRmPk'

//== 일정 등록 ==//
export const schedule = async (scheduleData?: Schedule): Promise<void> => ***REMOVED***
  console.log(scheduleData);
  const response = await axios(***REMOVED***
    method: "post",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    // headers: ***REMOVED***
    //   Authorization: sessionStorage.getItem("token"),
    // ***REMOVED***,
    data: scheduleData
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 일정 조회 ==//
export const getSchedule = async (selectedDate: string): Promise<GetSchedule[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    // headers: ***REMOVED***
    //   Authorization: sessionStorage.getItem("token"),
    // ***REMOVED***,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    params: ***REMOVED***
      date: selectedDate
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data.data);
  return response.data.data;
***REMOVED***;