import axios from "axios";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = "http://localhost:8000/api/recommends";

export const aiRecommend = async (message: string): Promise<Product[]> => ***REMOVED***
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