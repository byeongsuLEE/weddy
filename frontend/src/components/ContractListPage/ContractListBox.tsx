import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** Link, useNavigate ***REMOVED*** from "react-router-dom";
import TodoButton from "../../common/TodoButton";
import GotoIcon from "../../icons/Goto";
import ProgressBar from "./ProgressBar";

interface ContractListBoxProps ***REMOVED***
  type: string;
  contractInfo: ContractData;
***REMOVED***

const ContractListBox = (***REMOVED*** type, contractInfo ***REMOVED***: ContractListBoxProps) => ***REMOVED***
  const navigate = useNavigate();

  const toDetail = () => ***REMOVED***
    navigate("/board/detail");
  ***REMOVED***;

  // const category = ***REMOVED***
  //   STUDIO: "studio",
  //   DRESS: "dress",
  //   MAKEUP: "makeup"
  // ***REMOVED***[type];

  return (
    <>
      <div className="h-[170px] bg-white rounded-3xl pt-10 px-5 my-5">
        <ProgressBar status=***REMOVED***contractInfo.status***REMOVED*** />

        <div className="flex justify-between mt-10">
          <div className="flex items-center" onClick=***REMOVED***toDetail***REMOVED***>
            <h1 className="font-bold mr-4">***REMOVED***type***REMOVED***</h1>
            <GotoIcon />
          </div>

          ***REMOVED***contractInfo.status === "CONTRACT_REQUEST" && (
            <TodoButton title="계약 요청" colorId=***REMOVED***1***REMOVED*** />
          )***REMOVED***
          ***REMOVED***contractInfo.status === "CONTRACT_PENDING" && (
            <TodoButton title="계약 대기중" colorId=***REMOVED***2***REMOVED*** />
          )***REMOVED***
          ***REMOVED***contractInfo.status === "SIGN_PENDING" && (
             <Link to='/contract'>
               <TodoButton title="서명 하기" colorId=***REMOVED***1***REMOVED*** />
             </Link>
          )***REMOVED***
          ***REMOVED***contractInfo.status === "PAYMENT_PENDING" && (
            <TodoButton title="결제 하기" colorId=***REMOVED***1***REMOVED*** />
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
