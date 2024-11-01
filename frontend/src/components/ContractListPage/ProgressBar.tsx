import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** Progress ***REMOVED*** from "@/components/ui/progress";

// 계약대기:0 서명:40 결제:65 결제완료:100 
interface ProgressBarProps ***REMOVED***
  status: "CONTRACT_PENDING" | "SIGN_PENDING" | "PAYMENT_PENDING" | "PAYMENT_COMPLETED";
***REMOVED***

const ProgressBar = (***REMOVED*** status ***REMOVED***: ProgressBarProps) => ***REMOVED***
  const [progress, setProgress] = useState(0);

  useEffect(() => ***REMOVED***
    const value = ***REMOVED***
      CONTRACT_PENDING: 0,
      SIGN_PENDING: 40,
      PAYMENT_PENDING: 65,
      PAYMENT_COMPLETED: 100
    ***REMOVED*** as const;
    setProgress(value[status]);
  ***REMOVED***, [status]);

  return (
    <>
      <Progress value=***REMOVED***progress***REMOVED*** />
      <div className="flex text-xs w-[335px] justify-between">
        <span>계약대기</span>
        <span>서명</span>
        <span>결제</span>
        <span>결제완료</span>
      </div>
    </>
  );
***REMOVED***;

export default ProgressBar;
