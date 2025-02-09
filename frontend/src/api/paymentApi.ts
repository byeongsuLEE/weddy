// src/api/paymentApi.ts
import axios from "axios";
import * as PortOne from "@portone/browser-sdk/v2";
import { ContractData } from "./contract.type";

const BASE_URL = `/api/payments`
const PORTONE_CHANNEL_KEY = import.meta.env.VITE_PORTONE_CHANNEL_KEY;
const PORTONE_STORE_ID = import.meta.env.VITE_PORTONE_STORE_ID;
const redirectUrl = import.meta.env.VITE_PUBLIC_URL;

export enum ProductType {
  STUDIO = "STUDIO",
  DRESS = "DRESS",
  MAKEUP = "MAKEUP",
}

// 결제 요청 함수
export const requestPayment = async (
  contractInfo: ContractData
): Promise<void> => {
  console.log("PORTONE_CHANNEL_KEY:", PORTONE_CHANNEL_KEY);
  console.log("PORTONE_STORE_ID:", PORTONE_STORE_ID);
  const { title, totalMount } = contractInfo;
  const paymentId = generatePaymentId();
  console.log("paymentId  :", paymentId);
  const response = await PortOne.requestPayment({
    storeId: PORTONE_STORE_ID,
    channelKey: PORTONE_CHANNEL_KEY,
    paymentId: paymentId,
    orderName: title, // 상품명으로 주문명 설정
    totalAmount: parseInt(totalMount, 10), // totalMount를 숫자로 변환
    currency: "CURRENCY_KRW", // KRW로 설정 (변경 없음)
    payMethod: "EASY_PAY",
    windowType: {
      pc: "IFRAME",
      mobile: "REDIRECTION",
    },
    redirectUrl: redirectUrl, // 결제 완료 후 리다이렉트될 URL
  });

  if (response) {
    if (!response.code) {
      // 결제 성공 시 서버로 정보 전송
      await sendPaymentSuccessToServer(contractInfo, paymentId);
    } else {
      console.error(`결제 실패: ${response.message}`);
    }
  }
};

// 결제 성공 시 서버로 전송하는 함수
const sendPaymentSuccessToServer = async (
  contractInfo: ContractData,
  paymentId: string
): Promise<void> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/success`,
      {
        id: contractInfo.id,
        title: contractInfo.title,
        product: contractInfo.product,
        startDate: contractInfo.startDate,
        endDate: contractInfo.endDate,
        content: contractInfo.content,
        userId: contractInfo.userId,
        userName: contractInfo.userName,
        code: contractInfo.code,
        totalMount: contractInfo.totalMount,
        paymentId: paymentId,
        companyName: contractInfo.companyName,
        status: contractInfo.status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"), // ACCESS_TOKEN 추가
        },
      }
    );

    if (response.status === 200) {
      console.log("결제 성공 정보 서버 전송 완료");
    } else {
      console.warn("서버 전송 실패");
    }
  } catch (error) {
    console.error("서버 전송 오류:", error);
  }
};

// Payment ID 생성 함수
const generatePaymentId = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `ORD${year}${month}${date}-${hours}${minutes}${seconds}`;
};
