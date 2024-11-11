import axios from "axios"
import ***REMOVED*** ContractData, ContractProduct, SentContractType ***REMOVED*** from "./contract.type";
import ***REMOVED*** Product ***REMOVED*** from "./product.type";

const BASE_URL = 'http://localhost:8080/api/contracts'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwidXNlck5hbWUiOiJb6rSR7KO8XzHrsJhfYzEwM1_snbTrs5HsiJhdIiwiY29kZSI6IkczNzFSTyIsImlhdCI6MTczMDQyNDQ1MSwiZXhwIjoxNzMzMDE2NDUxfQ.R7YFdmlN-IZkTeo0veuMA4W2eW_9-dXJJ-pGU8SRmPk'

//== 계약서 생성 ==// 
export const createContract = async (contractItems: Product[]): Promise<void> => ***REMOVED***
  const contracts = contractItems.map((item) => ***REMOVED***
    const date = new Date().toLocaleDateString('ko-KR', ***REMOVED***
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    ***REMOVED***).replace(/. /g, '-').slice(0, 10);

    const contractProduct: ContractProduct = ***REMOVED***
      productId: item.id,
      productName: item.name,
      productContent: item.content,
      type: item.type,
    ***REMOVED***;

    return ***REMOVED***
      userId: sessionStorage.getItem("userId") as string,
      totalMount: item.price,
      companyName: item.vendorName,
      startDate: date,
      endDate: date,
      product: contractProduct,
    ***REMOVED***;
  ***REMOVED***);
  
  return requestContract(contracts);
***REMOVED***;

//== 계약 요청 ==//
export const requestContract = async (contractList: SentContractType[]): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/5`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***,
    // headers: ***REMOVED***
    //   Authorization: sessionStorage.getItem("token")
    // ***REMOVED***,
    data: contractList
  ***REMOVED***);
***REMOVED***;

//== 계약 리스트 ==//
export const myContract = async (): Promise<ContractData[]> => ***REMOVED***
  const response = await axios(***REMOVED*** 
    method: 'get',
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***
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

//== 계약서 상태 변경 ==//
export const changeStatus = async (contractId?: string): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***/$***REMOVED***contractId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***
    // headers: ***REMOVED***
    //   Authorization: sessionStorage.getItem("token")
    // ***REMOVED***
  ***REMOVED***);
***REMOVED***;