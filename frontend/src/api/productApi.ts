import axios from "axios";
import ***REMOVED*** Product, ReviewData ***REMOVED*** from "./product.type";

const BASE_URL = 'http://localhost:8080/api/products'

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

//== 상품 담기 ==//
export const addProductToCart = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/cart`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 장바구니 삭제 ==//
export const deleteFromCart = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'delete',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/cart`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 장바구니 리스트 조회 ==//
export const getCartItems = async (): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/my`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem('token')
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
  return response.data;
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