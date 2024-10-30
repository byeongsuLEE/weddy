import axios from "axios"

const BASE_URL = 'http://localhost:8000/api/recommends';

export const aiRecommend = async (data: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: ***REMOVED***
      message: data
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;