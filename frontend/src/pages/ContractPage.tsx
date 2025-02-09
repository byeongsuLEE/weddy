import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changeStatus, contractInfo } from "../api/contractApi";
import TodoButton from "../common/TodoButton";
import { makeImage } from "../hooks/makeImage";
import { mintNFT } from "../hooks/mintNFT";
import { makeSignature } from "../hooks/signature";
import { uploadToPinata } from "../hooks/uploadToPinata";
import { useQuery } from "react-query";
import NFTLoading from "./NFTLoadingPage";

const Contract = () => {
  const { category, contractId } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const date = new Date();

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}년 ${month}월 ${day}일`;
  }

  //== 계약서 정보 ==//
  const { data: contract, isLoading } = useQuery(
    ['contractInfo', contractId],
    () => contractInfo(contractId),
    {enabled: !!contractId}
  );

  //== 전자서명 후 NFT 민팅 ==//
  const handleSignature = async () => {
    const contractImage = await makeImage(pageRef);

    await makeSignature();

    const hash = await uploadToPinata(contractImage, contract);

    await Promise.all([
      setLoading(true),
      mintNFT(hash),
      changeStatus(contractId)
    ]);

    navigate("/contract/list");
  };

  const type = {
    studio: "촬영",
    dress: "드레스",
    makeup: "메이크업"
  }[category as "studio" | "dress" | "makeup"];

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {loading ? (
        <NFTLoading/>
      ) : (
        <div>
          <div className="bg-white border rounded-sm p-5 mx-5 mt-5" ref={pageRef}>
        <div className="text-center text-lg font-bold">
          계약서
        </div>
        <div className="flex flex-col">
          <br />
          <div className="flex font-bold">
            <div>상품명 :</div>
            <div className="ml-2">{contract?.product.productName}</div>
          </div>
          <div className="flex font-bold">
            <div>예식 :</div>
            <div className="ml-2">2024.11.11</div>
          </div>
          <div className="flex font-bold">
            <div>{type} :</div>
            <div className="ml-2">2024.11.01</div>
          </div>
          <br />
          <span className="text-sm">
            <strong>{contract?.userName}</strong>
            (이하 “갑” 아리 한다.)와
            <strong>{contract?.companyName}</strong>
            (이하 “을” 이라 한다.)는 상품명에 명시된 업무작업을 수행하기 위해 다음과 같이 계약을 체결한다.
          </span>
          <br />
          <span className="font-bold text-sm">제 1조[목적]</span>
          <span className="text-sm">본 계약을 “갑”이 “을”에게 의뢰한 업무를 “갑”에게 공급함에 있어 “갑”과 “을" 사이에 필요한 사항을 정하는 것을 목적으로 한다.</span>
          <br />
          <span className="font-bold text-sm">제 2조 [계약기간]</span>
          <span className="text-sm">계약 일시는
            <strong>{formatDate(date)}</strong>
            로 하며, 갑과 을의 합의 하에 본 계약일시는 변경 될 수 있다.</span>
          <br />
          <span className="font-bold text-sm">제 3조 [계약금액]</span>
          <span className="text-sm">총 계약금액은
            <strong>{(Number(contract?.totalMount) / 10000).toLocaleString()}</strong>
            만원을 착수시점에 “갑”은 “을”에게 지급하기로 한다.</span>
          <br />
          <span className="font-bold text-sm">제 4조 [납품]</span>
          <span className="text-sm">“을”은 작업 진행 중 중간 완료된 성과물을 1회에 걸쳐 중간 납품을 하며, 최종 자료는 검토 및 수정 후 완성품으로 납품하기로 한다.</span>
          <br />
          <span className="font-bold text-sm">제 5조 [비밀유지]</span>
          <span className="text-sm">“을”은 본 작업과 관련된 어떠한 일체의 정보를 외부에 누설하거나 유출해서는 안 되며 이로 인해 발생하는 모든 책임은 “을”이 진다.</span>
          <br />
          <span className="font-bold text-sm">제 6조 [해지]</span>
          <span className="text-sm">“갑”과 “을”은 다음 각 호에 해당될 경우 본 계약을 해지할 수 있다.
            <br />
            <br />
            (1) 정당한 이유 없이 작업 진행이 이루어지지 않을 때 <br />
            (2) 정당한 이유 없이 계약기간에 작업완료가 불가능하다고 판단될 때 <br />
            (3) “갑”이 계약금을 지급하지 않았을 경우
          </span>
          <br />
          <span className="font-bold text-sm">제 7조 [손해배상]</span>
          <span className="text-sm">“을”의 귀책사유로 인하여 본 계약이 불이행되었을 경우 “을”은 “갑”이 제시한 손해배상의 책임을 진다.</span>
          <br />
          <span className="font-bold text-sm">제 8조 [소송관할]</span>
          <span className="text-sm">본 계약으로 발생하는 분쟁은 관할지방법원을 관할법원으로 한다.</span>
          <br />
          <span className="text-sm">각 당사자는 위 계약을 증명하기 위하여 본 계약서 2통을 작성하여 각각 서명(또는 기명)날인 후 “갑”과 “을”이 각각 1통씩 보관한다.</span>
          <br />
          <span className="text-center my-10 font-bold">
            계약일자 : {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-3 mb-24 mr-5" onClick={handleSignature}>
        <TodoButton title="전자 서명" colorId={1} />
      </div>
        </div>
      )}
    </>
  )
}

export default Contract;


