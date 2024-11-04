import axios from "axios"
import ***REMOVED*** ContractData, ContractProduct, SentContractType ***REMOVED*** from "./contract.type";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = 'http://localhost:8080/api/contracts'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwidXNlck5hbWUiOiJb6rSR7KO8XzHrsJhfYzEwM1_snbTrs5HsiJhdIiwiY29kZSI6IkczNzFSTyIsImlhdCI6MTczMDQyNDQ1MSwiZXhwIjoxNzMzMDE2NDUxfQ.R7YFdmlN-IZkTeo0veuMA4W2eW_9-dXJJ-pGU8SRmPk'

//== 계약서 생성 ==//
export const createContract = async (data: Product): Promise<void> => ***REMOVED***
  const date = new Date().toISOString().slice(0, 10);
  
  const contractProduct: ContractProduct = ***REMOVED***
    product_id: data.id,
    product_name: data.name,
    product_content: data.content
  ***REMOVED***;

  const contract = ***REMOVED***
    "userId": "5",
    "totalMount": data.price,
    "companyName": data.vendorName,
    "startDate": date,
    "endDate": date,
    "type": data.type,
    "product": contractProduct
  ***REMOVED***

  return requestContract([contract]);
***REMOVED***;

//== 계약 요청 ==//
export const requestContract = async (contract: SentContractType[]): Promise<void> => ***REMOVED***
  console.log(contract);
  const response = await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/5`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    // url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***sessionStorage.getItem("userId")***REMOVED***`,
    // headers: ***REMOVED***
    //   Authorization: sessionStorage.getItem("token")
    // ***REMOVED***
    data: contract
  ***REMOVED***);
  console.log(response.data);
***REMOVED***

//== 계약 리스트 ==//
export const myContract = async (): Promise<ContractData[]> => ***REMOVED***
  const response = await axios(***REMOVED*** 
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED***`,
    // ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 계약서 상세 조회 ==//
export const contractInfo = async (contractId?: string): Promise<ContractData> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***contractId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED***`,
    // ***REMOVED***
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 계약서 전자서명 ==//
export const signature = async (signature: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/signature`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED***`
    // ***REMOVED***,
    data: signature
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;