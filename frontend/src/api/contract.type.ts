export interface ContractProduct {
  productId: string;
  productName: string;
  productContent: string;
  type: string;
}

export interface SentContractType {
  userId: string;
  totalMount: string;
  companyName: string;
  startDate: string;
  endDate: string;
  product: ContractProduct;
}

export interface ContractData {
  id: string;
  product: ContractProduct;
  userId?: string;
  content: string;
  status:
    | "CONTRACT_PENDING"
    | "SIGN_PENDING"
    | "PAYMENT_PENDING"
    | "PAYMENT_COMPLETED";
  totalMount: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  title: string;
  userName: string;
  code: string;
}
