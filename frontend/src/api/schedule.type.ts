export interface Schedule ***REMOVED***
  contractType: string;
  startDate: string | null;
  endDate: string | null;
  content: string;
  productId?: string;
***REMOVED***

export interface GetSchedule ***REMOVED***
  id: string;
  contractType: string;
  startDate: Date;
  endDate: Date;
  content: string;
  venderName: string;
  venderPhone: string;
  productId: string;
***REMOVED***