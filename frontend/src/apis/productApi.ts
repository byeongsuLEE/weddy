import axios from "axios"
import ***REMOVED*** Product, ReviewData ***REMOVED*** from "./product.type";

const BASE_URL = 'http://localhost:8080/api/products'

//== 상품 조회 ==//
export const allProduct = async (): Promise<Product[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;

//== 상품 상세 조회 ==//
export const detailProduct = async (productId?: string): Promise<Product> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;

//== 전화번호 조회 ==//
export const getPhone = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/comment`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 상품 담기 ==//
export const addProductToCart = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/cart`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 장바구니 삭제 ==//
export const deleteFromCart = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'delete',
    url: `$***REMOVED***BASE_URL***REMOVED***/`,
    headers: ***REMOVED***
      Authorization: `Bearer `
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
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;

//== 리뷰 리스트 ==//
export const getReviewList = async (productId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/review`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 리뷰 등록 ==//
export const submitReview = async (reviewData: ReviewData, productId?: string): Promise<void> => ***REMOVED***
  console.log(reviewData);
  // const response = await axios(***REMOVED***
  //   method: 'post',
  //   url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/review`,
  //   headers: ***REMOVED***
  //     Authorization: `Bearer `
  //   ***REMOVED***,
  //   data: reviewData
  // ***REMOVED***);
  // console.log(response.data);
***REMOVED***;