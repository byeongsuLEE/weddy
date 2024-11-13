import axios from "axios";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = "http://localhost:8007/api/recommends";

export const aiRecommend = async (message: string): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    params: ***REMOVED*** message ***REMOVED***, // URL 파라미터로 message 전달
  ***REMOVED***);
  
  console.log(response.data);
  return response.data;
***REMOVED***;
