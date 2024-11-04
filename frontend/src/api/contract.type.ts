interface ContractProduct ***REMOVED***
  product_id: string;
  product_name: string;
  product_content: string;
  type: string;
***REMOVED***

export interface ContractData ***REMOVED***
  id: number;
  product: ContractProduct;
  customer?: string;
  type: string;
  content: string;
  status: "CONTRACT_PENDING" | "SIGN_PENDING" | "PAYMENT_PENDING" | "PAYMENT_COMPLETED";
  totalMount: string;
  downPayment: string;
  finalPayment: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  title: string;
  userName: string;
***REMOVED***;