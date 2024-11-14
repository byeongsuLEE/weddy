import axios from "axios";

const URL = process.env.VITE_PUBLIC_URL
const BASE_URL = `$***REMOVED***URL***REMOVED***/api/users`

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