import ***REMOVED*** Product ***REMOVED*** from "./product.type";

export interface Schedule ***REMOVED***
  type: string;
  startDate: Date | null;
  endDate: Date | null;
  content: string;
***REMOVED***

export interface GetSchedule ***REMOVED***
  id: string;
  startDate: Date;
  endDate: Date;
  content: string;
  venderName: string;
  venderPhone: string;
  product: Product;
***REMOVED***
