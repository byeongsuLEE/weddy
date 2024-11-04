import axios from "axios"
import ***REMOVED*** ContractData ***REMOVED*** from "./contract.type";

const BASE_URL = 'http://localhost:8080/api/contracts'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwidXNlck5hbWUiOiJb6rSR7KO8XzHrsJhfYzEwM1_snbTrs5HsiJhdIiwiY29kZSI6IkczNzFSTyIsImlhdCI6MTczMDQyNDQ1MSwiZXhwIjoxNzMzMDE2NDUxfQ.R7YFdmlN-IZkTeo0veuMA4W2eW_9-dXJJ-pGU8SRmPk'

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