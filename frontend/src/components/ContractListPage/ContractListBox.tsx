import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** changeStatus ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** requestPayment ***REMOVED*** from "@/api/paymentApi";
import DropdownIcon from "@/icons/DropdownIcon";
import FileSelectIcon from "@/icons/FileSelectIcon";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import TodoButton from "../../common/TodoButton";
import GotoIcon from "../../icons/Goto";
import ProgressBar from "./ProgressBar";


interface ContractListBoxProps ***REMOVED***
  type: string;
  contractInfo: ContractData;
***REMOVED***

const ContractListBox = (***REMOVED*** type, contractInfo ***REMOVED***: ContractListBoxProps) => ***REMOVED***


  console.log("계약서 정보 ", contractInfo);
  const handleChangeStatus = async () => ***REMOVED***
    await changeStatus(contractInfo.id);
    window.location.reload();
  ***REMOVED***;

  const handlePayment = () => ***REMOVED***
    requestPayment(contractInfo);
  ***REMOVED***;

  return (
    <div className="mb-5">
      <Accordion
        sx=***REMOVED******REMOVED***
          boxShadow: "none",
          border: "none",
          borderRadius: "10px",
          marginY: 3,
          "&:before": ***REMOVED***
            display: "none",
          ***REMOVED***,
        ***REMOVED******REMOVED***
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="w-[350px] h-[100px]"
          sx=***REMOVED******REMOVED***
            boxShadow: "none",
            borderBottom: "none",
            padding: "16px",
            borderRadius: "10px",
            margin: 0,
          ***REMOVED******REMOVED***
        >
          <div className="flex justify-between w-[300px]">
            <div className="flex items-center">
              <div>
                <div className="flex items-center justify-between mx-2 mb-5">
                  <h1 className="font-bold mr-4">***REMOVED***type***REMOVED***</h1>
                  <DropdownIcon />
                </div>
                <ProgressBar status=***REMOVED***contractInfo.status***REMOVED*** />
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>

          <div className="flex justify-between mt-10">
            <Link to=***REMOVED***`/board/detail/$***REMOVED***contractInfo.product.productId***REMOVED***`***REMOVED***>
              <div className="flex items-center">
                <h1 className="font-bold mr-4">***REMOVED***contractInfo.companyName***REMOVED***</h1>
                <GotoIcon />
              </div>
            </Link>

            ***REMOVED***contractInfo.status === "CONTRACT_PENDING" && (
              <div onClick=***REMOVED***handleChangeStatus***REMOVED***>
                <TodoButton title="계약 대기중" colorId=***REMOVED***2***REMOVED*** cursor="default" />
              </div>
            )***REMOVED***
            ***REMOVED***contractInfo.status === "SIGN_PENDING" && (
              <Link
                to=***REMOVED***`/contract/$***REMOVED***contractInfo.product.type***REMOVED***/$***REMOVED***contractInfo.id***REMOVED***`***REMOVED***
              >
                <TodoButton title="서명 하기" colorId=***REMOVED***1***REMOVED*** />
              </Link>
            )***REMOVED***
            ***REMOVED***contractInfo.status === "PAYMENT_PENDING" && (
              <div onClick=***REMOVED***handlePayment***REMOVED***>
                <TodoButton title="결제 하기" colorId=***REMOVED***1***REMOVED*** />
              </div>
            )***REMOVED***
            ***REMOVED***contractInfo.status === "PAYMENT_COMPLETED" && (
              <div className="flex items-center">
                <div className="mr-2">
                  <FileSelectIcon w=***REMOVED***20***REMOVED*** h=***REMOVED***20***REMOVED*** />
                </div>
                <Link to=***REMOVED***`/review/$***REMOVED***contractInfo.product.productId***REMOVED***`***REMOVED***>
                  <TodoButton title="리뷰 쓰기" colorId=***REMOVED***1***REMOVED*** />
                </Link>
              </div>
            )***REMOVED***
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
***REMOVED***;
export default ContractListBox;
