import { ContractData } from "@/api/contract.type";
import { changeStatus } from "@/api/contractApi";
import { requestPayment } from "@/api/paymentApi";
import DropdownIcon from "@/icons/DropdownIcon";
import FileSelectIcon from "@/icons/FileSelectIcon";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Link } from "react-router-dom";
import TodoButton from "../../common/TodoButton";
import GotoIcon from "../../icons/Goto";
import ProgressBar from "./ProgressBar";
import { NftType } from "@/api/nft.type";
import { useEffect, useState } from "react";
import AlertBox from "@/common/AlertBox";

interface ContractListBoxProps {
  type: string;
  nftList: NftType[];
  contractInfo?: ContractData;
  onChange: (contractId: string) => void;
}

const ContractListBox = ({ type, nftList, contractInfo, onChange }: ContractListBoxProps) => {
  const [showIcon, setShowIcon] = useState<Boolean>(false);
  const [nftData, setNftData] = useState<NftType | undefined>();
  const [showAlert, setShowAlert] = useState(false); // AlertBox 상태 추가

  const handleChangeStatus = async () => {
    if (contractInfo) {
      onChange(contractInfo.id);
    }
  };

  const handlePayment = async () => {
    if (contractInfo) {
      await requestPayment(contractInfo);
      await changeStatus(contractInfo.id);
      onChange(contractInfo.id);

      // AlertBox 열기
      setShowAlert(true);

      // 2초 후 AlertBox 닫기
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  const goNFT = () => {
    if (nftData) {
      window.open(nftData.image);
    }
  };

  useEffect(() => {
    if (nftList) {
      setNftData(nftList.find((nft: NftType) => nft.type === contractInfo?.product.type));
    }
    if (nftData) {
      setShowIcon(true);
    }
  }, [nftList, nftData]);

  return (
    <div className="mb-5">
      {showAlert && <AlertBox title="결제" description="결제가 완료되었습니다." />}
      <Accordion
        sx={{
          boxShadow: "none",
          border: "none",
          borderRadius: "10px",
          marginY: 3,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="w-[350px] h-[100px]"
          sx={{
            boxShadow: "none",
            borderBottom: "none",
            padding: "16px",
            borderRadius: "10px",
            margin: 0,
          }}
        >
          {contractInfo ? (
            <div className="flex justify-between w-[300px]">
              <div className="flex items-center">
                <div>
                  <div className="flex items-center justify-between mx-2 mb-5">
                    <h1 className="font-bold mr-4">{type}</h1>
                    <DropdownIcon />
                  </div>
                  <ProgressBar status={contractInfo.status} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between mx-2 mb-5  w-[335px]">
              <h1 className="font-bold ml-4">{type}</h1>
              <div className="flex items-center">
                <DropdownIcon />
              </div>
            </div>
          )}
        </AccordionSummary>
        <AccordionDetails sx={{ border: "none" }}>
          {contractInfo ? (
            <div className="flex justify-between mt-10">
              <Link to={`/board/detail/${contractInfo.product.productId}`}>
                <div className="flex items-center">
                  <h1 className="font-bold mr-4">{contractInfo.companyName}</h1>
                  <GotoIcon />
                </div>
              </Link>

              {contractInfo.status === "CONTRACT_PENDING" && (
                <div onClick={handleChangeStatus}>
                  <TodoButton
                    title="계약 대기중"
                    colorId={2}
                    cursor="default"
                  />
                </div>
              )}
              {contractInfo.status === "SIGN_PENDING" && (
                <Link
                  to={`/contract/${contractInfo.product.type.toLowerCase()}/${contractInfo.id}`}
                >
                  <TodoButton title="서명 하기" colorId={1} />
                </Link>
              )}
              {contractInfo.status === "PAYMENT_PENDING" && (
                <div onClick={handlePayment}>
                  <TodoButton title="결제 하기" colorId={1} />
                </div>
              )}
              {contractInfo.status === "PAYMENT_COMPLETED" && (
                <div className="flex items-center">
                  {showIcon ? (
                    <>
                      <div className="mr-2" onClick={goNFT}>
                        <FileSelectIcon w={20} h={20} />
                      </div>
                    </>
                  ) : null }
                  <Link to={`/review/${contractInfo.product.productId}`}>
                    <TodoButton title="리뷰 쓰기" colorId={1} />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>계약중인 계약서가 없습니다.</div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ContractListBox;
