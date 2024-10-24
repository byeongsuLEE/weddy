import axios from "axios"
import ***REMOVED*** ContractData ***REMOVED*** from "./contract.type";

const BASE_URL = 'http://localhost:8080/api/product/contracts'

//== 계약서 상세 조회 ==//
export const contractInfo = async (contractId?: string): Promise<ContractData> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***contractId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;

//== 계약서 전자서명 ==//
export const signature = async (signature: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/signature`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: signature
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

//== 나의 계약 리스트 ==//
export const myContract = async (): Promise<ContractData[]> => ***REMOVED***
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