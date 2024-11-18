import axios from "axios";

const BASE_URL = `/api/users`

//== 커플 코드 연결 ==//
export const connectCoupleCode = async (code: string): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/couple-connect`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
    data: ***REMOVED***
      "code": code
    ***REMOVED***
  ***REMOVED***);
***REMOVED***;