import axios from "axios";
import ***REMOVED*** Product, ReviewData ***REMOVED*** from "./product.type";

const URL = import.meta.env.VITE_PUBLIC_URL
const BASE_URL = `$***REMOVED***URL***REMOVED***/api/products`

//== 모든 상품 조회 ==//
export const allProducts = async (): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  
  return response.data.data;
***REMOVED***;

//== 상품 랭킹 ==//
export const getRankedProducts = async (): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/ranking`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 상품 상세 조회 ==//
export const detailProduct = async (productId?: string): Promise<Product> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 리뷰 조회 ==//
export const getReviewList = async (productId?: string): Promise<ReviewData[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/review`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 리뷰 등록 ==//
export const submitReview = async (reviewData: ReviewData, productId?: string): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/review`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***,
    data: reviewData
  ***REMOVED***);
***REMOVED***;