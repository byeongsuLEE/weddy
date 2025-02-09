import axios from "axios";
import { Product } from "./product.type";

const BASE_URL = `/api/recommends`

export const aiRecommend = async (message: string): Promise<Product[]> => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}`,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
    params: { message },
  });
  
  console.log(response.data.data);
  return response.data.data;
};
