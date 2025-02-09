export interface Schedule {
  type: string;
  startDate: string | null;
  endDate: string | null;
  content: string;
  productId?: string;
  userCoupleToken: {
    myFcmToken: string;
  };
}

export interface GetSchedule {
  id: string;
  contractType: "STUDIO" | "DRESS" | "MAKEUP" | "WEDDING";
  startDate: Date;
  endDate: Date;
  content: string;
  venderName: string;
  venderPhone: string;
  productId: string;
}