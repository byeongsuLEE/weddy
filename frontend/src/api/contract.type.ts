export interface ContractProduct ***REMOVED***
  product_id: string;
  product_name: string;
  product_content: string;
***REMOVED***

export interface SentContractType ***REMOVED***
  userId: string;
  totalMount: string;
  companyName: string;
  startDate: string;
  endDate: string;
  type: string;
  product: ContractProduct;
***REMOVED***

export interface ContractData ***REMOVED***
  id: number;
  product: ContractProduct;
  customer?: string;
  type: string;
  content: string;
  status: "CONTRACT_PENDING" | "SIGN_PENDING" | "PAYMENT_PENDING" | "PAYMENT_COMPLETED";
  totalMount: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  title: string;
  userName: string;
  code: string;
***REMOVED***;