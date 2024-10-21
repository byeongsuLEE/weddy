import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/products'

//== 상품 조회 ==//
export const allProduct = async (): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 상품 상세 조회 ==//
export const detailProduct = async (productId: number): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 리뷰 리스트 ==//
export const reviewList = async (productId: number): Promise<void> => ***REMOVED***
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
export const submitReview = async (productId: number, data: any): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***productId***REMOVED***/review`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;