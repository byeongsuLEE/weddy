export interface ContractProduct ***REMOVED***
  productId: string;
  productName: string;
  productContent: string;
  type: string;
***REMOVED***

export interface SentContractType ***REMOVED***
  userId: string;
  totalMount: string;
  companyName: string;
  startDate: string;
  endDate: string;
  product: ContractProduct;
***REMOVED***

export interface ContractData ***REMOVED***
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
***REMOVED***
