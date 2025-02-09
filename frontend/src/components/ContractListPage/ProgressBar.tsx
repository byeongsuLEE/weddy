import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

// 계약대기:0 서명:40 결제:65 결제완료:100 
interface ProgressBarProps {
  status: "CONTRACT_PENDING" | "SIGN_PENDING" | "PAYMENT_PENDING" | "PAYMENT_COMPLETED";
}

const ProgressBar = ({ status }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const value = {
      CONTRACT_PENDING: 0,
      SIGN_PENDING: 40,
      PAYMENT_PENDING: 65,
      PAYMENT_COMPLETED: 100
    } as const;
    setProgress(value[status]);
  }, [status]);

  return (
    <>
      <Progress value={progress} />
      <div className="flex text-xs w-[335px] justify-between">
        <span>계약대기</span>
        <span>서명</span>
        <span>결제</span>
        <span>결제완료</span>
      </div>
    </>
  );
};

export default ProgressBar;
