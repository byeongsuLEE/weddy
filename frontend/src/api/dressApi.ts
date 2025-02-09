import axios from "axios";
import { Dress } from "./dress.type";


const BASE_URL = `/api/users/sketch`

// 드레스 전체 조회
export const getDressList = async (): Promise<Dress[]> => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}`,
    headers: {
      Authorization: sessionStorage.getItem("token")
    },
  });
  return response.data.data;
}

// 드레스 스케치 저장
export const saveDress = async (formData: FormData): Promise<void> => {
  await axios({
    method: "post",
    url: `${BASE_URL}`,
    headers: {
      Authorization: sessionStorage.getItem("token") || "",
    },
    data: formData,
  });
}
