import axios from "axios";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = `/api/recommends`

export const aiRecommend = async (message: string): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    params: ***REMOVED*** message ***REMOVED***,
  ***REMOVED***);
  
  console.log(response.data.data);
  return response.data.data;
***REMOVED***;
