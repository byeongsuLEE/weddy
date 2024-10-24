import ***REMOVED*** useRef ***REMOVED*** from "react";
import TodoButton from "../common/TodoButton";
import ***REMOVED*** mintNFT ***REMOVED*** from "../hooks/mintNFT";
import ***REMOVED*** makeSignature ***REMOVED*** from "../hooks/signature";
import ***REMOVED*** uploadToPinata ***REMOVED*** from "../hooks/uploadToPinata";
import ***REMOVED*** makeImage ***REMOVED*** from "../hooks/makeImage";
import ***REMOVED*** signature ***REMOVED*** from "../apis/contractApi";
import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";
// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Contract = () => ***REMOVED***
  const ***REMOVED*** category ***REMOVED*** = useParams();

  const pageRef = useRef<HTMLDivElement>(null);

  // //== 계약서 정보 ==//
  // const ***REMOVED*** data: contractData ***REMOVED*** = useQuery(
  //   ['contractInfo', contractId],
  //   () => contractInfo(contractId),
  //   ***REMOVED***enabled: !!contractId***REMOVED***
  // );

  //== 전자서명 후 NFT 민팅 ==//
  const handleSignature = async () => ***REMOVED***
    const contractImage = await makeImage(pageRef);

    const [ sign, hash ] = await Promise.all([
      makeSignature(),
      uploadToPinata(contractImage, category)
    ]);

    await Promise.all([
      mintNFT(hash),
      signature(sign)
    ]);
  ***REMOVED***;

  return (
    <div>
      <div className="bg-white border rounded-sm p-5 mx-5 mt-5" ref=***REMOVED***pageRef***REMOVED***>
        <div className="text-center text-lg font-bold">
          계약서
        </div>
        <div className="flex flex-col">
          <br />
          <span className="font-bold text-sm">상품명 :
            <input name="projectName"  className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
          </span>
          <span className="font-bold text-sm">계약기간 :
            <input name="period"  className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
          </span>
          <br />
          <span className="text-sm">
            <input name="clientName" placeholder="소비자"  className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            (이하 “갑” 아리 한다.)와
            <input name="candidateName" placeholder="업체" className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            (이하 “을” 이라 한다.)는 상품명에 명시된 업무작업을 수행하기 위해 다음과 같이 계약을 체결한다.</span>
          <br />
          <span className="font-bold text-sm">제 1조[목적]</span>
          <span className="text-sm">본 계약을 “갑”이 “을”에게 의뢰한 업무를 “갑”에게 공급함에 있어 “갑”과 “을" 사이에 필요한 사항을 정하는 것을 목적으로 한다.</span>
          <br />
          <span className="font-bold text-sm">제 2조 [계약기간]</span>
          <span className="text-sm">계약 기간은
            <input name="startDate" className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />부터
            <input name="endDate"  className="border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            까지로 하며, 갑과 을의 합의 하에 본 계약기간은 연장 될 수 있다.</span>
          <br />
          <span className="font-bold text-sm">제 3조 [계약금액]</span>
          <span className="text-sm">총 계약금액은
            <input name="deposit"  className="text-end border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            만원으로 하며, 계약금액 중
            <input name="startPayment" placeholder="0"  className="text-end border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            만원은 착수시점에 지급하고,
            잔금
            <input name="finalPayment" placeholder="0"  className="text-end border p-2 border-mainGreen rounded-md h-[25px] m-1" type="text" />
            만원은 작업 완료 시 작업완료납품과 동시에 “갑”은 “을”에게 지급하기로 한다.</span>
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
            (3) “갑”이 계약금을 지급하지 않았을 경우</span>
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
            계약일자 : ***REMOVED***new Date().getFullYear()***REMOVED***년 ***REMOVED***new Date().getMonth() + 1***REMOVED***월 ***REMOVED***new Date().getDate()***REMOVED***일
          </span>
        </div>
    </div>
    <div className="flex justify-end mt-3 mb-24 mr-5" onClick=***REMOVED***handleSignature***REMOVED***>
    <TodoButton title="전자 서명" colorId=***REMOVED***1***REMOVED*** />
    </div>
    </div>
  )
***REMOVED***
export default Contract;