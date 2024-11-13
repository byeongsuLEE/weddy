import axios from "axios";
import ***REMOVED*** RecommendData ***REMOVED*** from "./recommend.type";

const BASE_URL = "http://localhost:8086/api/recommends";

export const aiRecommend = async (message: string): Promise<RecommendData[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    data: message,
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;