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
import ***REMOVED*** NftType ***REMOVED*** from "@/api/nft.type";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

interface ContractListBoxProps ***REMOVED***
  type: string;
  nftList: NftType[];
  contractInfo?: ContractData;
  onChange: (contractId: string) => void;
***REMOVED***

const ContractListBox = (***REMOVED*** type, nftList, contractInfo, onChange ***REMOVED***: ContractListBoxProps) => ***REMOVED***
  console.log(nftList);
  const [showIcon, setShowIcon] = useState<Boolean>(false);
  const [nftData, setNftData] = useState<NftType | undefined>();

  const handleChangeStatus = async () => ***REMOVED***
    if (contractInfo) ***REMOVED***
      onChange(contractInfo.id);
    ***REMOVED***
  ***REMOVED***;

  const handlePayment = async() => ***REMOVED***
    if (contractInfo) ***REMOVED***
      await requestPayment(contractInfo);
      await changeStatus(contractInfo.id);
      onChange(contractInfo.id);
    ***REMOVED***
  ***REMOVED***;

  const goNFT = () => ***REMOVED***
    if (nftData) ***REMOVED***
      window.open(nftData.image);
    ***REMOVED***
  ***REMOVED***;

  useEffect(() => ***REMOVED***
    if (nftList) ***REMOVED***
      setNftData(nftList.find((nft: NftType) => nft.type === contractInfo?.product.type));
    ***REMOVED***
    if (nftData) ***REMOVED***
      setShowIcon(true);
    ***REMOVED***
  ***REMOVED***, [nftList, nftData]);

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
          ***REMOVED***contractInfo ? (
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
          ) : (
            <div className="flex items-center justify-between mx-2 mb-5  w-[335px]">
              <h1 className="font-bold ml-4">***REMOVED***type***REMOVED***</h1>
              <div className="flex items-center">
                <DropdownIcon />
              </div>
            </div>
          )***REMOVED***
        </AccordionSummary>
        <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
          ***REMOVED***contractInfo ? (
            <div className="flex justify-between mt-10">
              <Link to=***REMOVED***`/board/detail/$***REMOVED***contractInfo.product.productId***REMOVED***`***REMOVED***>
                <div className="flex items-center">
                  <h1 className="font-bold mr-4">***REMOVED***contractInfo.companyName***REMOVED***</h1>
                  <GotoIcon />
                </div>
              </Link>

              ***REMOVED***contractInfo.status === "CONTRACT_PENDING" && (
                <div onClick=***REMOVED***handleChangeStatus***REMOVED***>
                  <TodoButton
                    title="계약 대기중"
                    colorId=***REMOVED***2***REMOVED***
                    cursor="default"
                  />
                </div>
              )***REMOVED***
              ***REMOVED***contractInfo.status === "SIGN_PENDING" && (
                <Link
                  to=***REMOVED***`/contract/$***REMOVED***contractInfo.product.type.toLowerCase()***REMOVED***/$***REMOVED***contractInfo.id***REMOVED***`***REMOVED***
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
                  ***REMOVED***showIcon ? (
                    <>
                      <div className="mr-2" onClick=***REMOVED***goNFT***REMOVED***>
                        <FileSelectIcon w=***REMOVED***20***REMOVED*** h=***REMOVED***20***REMOVED*** />
                      </div>
                    </>
                  ) : null ***REMOVED***
                  <Link to=***REMOVED***`/review/$***REMOVED***contractInfo.product.productId***REMOVED***`***REMOVED***>
                    <TodoButton title="리뷰 쓰기" colorId=***REMOVED***1***REMOVED*** />
                  </Link>
                </div>
              )***REMOVED***
            </div>
          ) : (
            <div>계약중인 계약서가 없습니다.</div>
          )***REMOVED***
        </AccordionDetails>
      </Accordion>
    </div>
  );
***REMOVED***;
export default ContractListBox;
