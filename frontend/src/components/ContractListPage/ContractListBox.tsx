import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import TodoButton from "../../common/TodoButton";
import GotoIcon from "../../icons/Goto";
import ProgressBar from "./ProgressBar";
import ***REMOVED*** requestPayment ***REMOVED*** from "@/api/paymentApi";
import ***REMOVED*** changeStatus ***REMOVED*** from "@/api/contractApi";

interface ContractListBoxProps ***REMOVED***
  type: string;
  contractInfo: ContractData;
***REMOVED***
const ContractListBox = (***REMOVED*** type, contractInfo ***REMOVED***: ContractListBoxProps) => ***REMOVED***

  const handleChangeStatus = () => ***REMOVED***
    changeStatus(contractInfo.id);
  ***REMOVED***;

  const handlePayment = () => ***REMOVED***
    requestPayment(contractInfo);
  ***REMOVED***;

  return (
    <>
      <div className="h-[170px] bg-white rounded-3xl pt-10 px-5 my-5">
        <ProgressBar status=***REMOVED***contractInfo.status***REMOVED*** />

        <div className="flex justify-between mt-10">
        <Link to=***REMOVED***`/board/detail/$***REMOVED***contractInfo.product.productId***REMOVED***`***REMOVED***>
            <div className="flex items-center">
              <h1 className="font-bold mr-4">***REMOVED***type***REMOVED***</h1>
              <GotoIcon />
            </div>
          </Link>
          ***REMOVED***contractInfo.status === "CONTRACT_PENDING" && (
            <div onClick=***REMOVED***handleChangeStatus***REMOVED***>
              <TodoButton title="계약 대기중" colorId=***REMOVED***2***REMOVED*** />
            </div>
          )***REMOVED***
          ***REMOVED***contractInfo.status === "SIGN_PENDING" && (
             <Link to=***REMOVED***`/contract/$***REMOVED***contractInfo.product.type***REMOVED***/$***REMOVED***contractInfo.id***REMOVED***`***REMOVED***>
               <TodoButton title="서명 하기" colorId=***REMOVED***1***REMOVED*** />
             </Link>
          )***REMOVED***
          ***REMOVED***contractInfo.status === "PAYMENT_PENDING" && (
            <div onClick=***REMOVED***handlePayment***REMOVED***>
              <TodoButton title="결제 하기" colorId=***REMOVED***1***REMOVED*** />
            </div>
          )***REMOVED***
          ***REMOVED***contractInfo.status === "PAYMENT_COMPLETED" && (
            <Link to='/review'>
              <TodoButton title="리뷰 쓰기" colorId=***REMOVED***1***REMOVED*** />
            </Link>
          )***REMOVED***
        </div>
      </div>
    </>
  );
***REMOVED***;
export default ContractListBox;
