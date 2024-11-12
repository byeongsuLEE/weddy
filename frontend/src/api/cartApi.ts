import axios from "axios";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = "http://localhost:8080/api/users/cart";

//== 상품 담기 ==//
export const addProductToCart = async (productId?: string): Promise<void> => ***REMOVED***
  console.log(productId);
  const response = await axios(***REMOVED***
    method: "post",
    url: `$***REMOVED***BASE_URL***REMOVED***/add/$***REMOVED***productId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
  console.log(response.data.data);
***REMOVED***;

//== 장바구니 리스트 조회 ==//
export const getCartItems = async (): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
  console.log(response.data.data);
  return response.data.data;
***REMOVED***;

//== 장바구니 삭제 ==//
export const deleteFromCart = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "delete",
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;