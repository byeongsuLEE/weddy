export interface Schedule ***REMOVED***
  type: string;
  startDate: string | null;
  endDate: string | null;
  content: string;
  productId?: string;
***REMOVED***

export interface GetSchedule ***REMOVED***
  id: string;
  contractType: "STUDIO" | "DRESS" | "MAKEUP" | "WEDDING";
  startDate: Date;
  endDate: Date;
  content: string;
  venderName: string;
  venderPhone: string;
  productId: string;
***REMOVED***