import axios from "axios"
import { ContractData, ContractProduct, SentContractType } from "./contract.type";
import { Product } from "./product.type";

const BASE_URL = `/api/contracts`

//== 계약서 생성 ==// 
export const createContract = async (contractItems: Product[]): Promise<void> => {
  const contracts = contractItems.map((item) => {
    const date = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/. /g, '-').slice(0, 10);

    const contractProduct: ContractProduct = {
      productId: item.id,
      productName: item.name,
      productContent: item.content,
      type: item.type,
    };

    return {
      userId: sessionStorage.getItem("userId") as string,
      totalMount: item.price,
      companyName: item.vendorName,
      startDate: date,
      endDate: date,
      product: contractProduct,
    };
  });
  
  return requestContract(contracts);
};

//== 계약 요청 ==//
export const requestContract = async (contractList: SentContractType[]): Promise<void> => {
  await axios({
    method: 'post',
    url: `${BASE_URL}/${sessionStorage.getItem('userId')}`,
    headers: {
      Authorization: sessionStorage.getItem("token")
    },
    data: contractList
  });
};

//== 계약 리스트 ==//
export const myContract = async (): Promise<ContractData[]> => {
  const response = await axios({ 
    method: 'get',
    url: BASE_URL,
    headers: {
      Authorization:sessionStorage.getItem("token")
    }
  });
  return response.data.data;
};

//== 계약서 상세 조회 ==//
export const contractInfo = async (contractId?: string): Promise<ContractData> => {
  const response = await axios({
    method: 'get',
    url: `${BASE_URL}/${contractId}`,
    headers: {
      Authorization: sessionStorage.getItem("token")
    }
  });
  return response.data.data;
};

//== 계약서 상태 변경 ==//
export const changeStatus = async (contractId?: string): Promise<void> => {
  await axios({
    method: 'patch',
    url: `${BASE_URL}/${contractId}`,
    headers: {
      Authorization: sessionStorage.getItem("token")
    }
  });
};