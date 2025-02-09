import { ContractData } from "@/api/contract.type";
import { contractUpload } from "../api/nftApi";

//== pinata에 업로드 후 ipfsHash 값 반환 ==//
export const uploadToPinata = async (file?: File, contract?: ContractData) => {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  return await contractUpload(formData, contract);
}