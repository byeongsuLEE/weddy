
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import Separate from "../../common/Separate";

interface BoardContentProp ***REMOVED***
  product?: Product | undefined;
***REMOVED***

const BoardContent = ( ***REMOVED*** product ***REMOVED***: BoardContentProp) => ***REMOVED***
  const price = product?.price.toString().replace(/\B(?=(\d***REMOVED***3***REMOVED***)+(?!\d))/g, ',');
  
  return (
    <div className="mx-5 mb-24">
      <div className="flex flex-col my-5">
        <span className="text-gray-500 text-sm">***REMOVED***product?.vendorName***REMOVED***</span>
        <span>***REMOVED***product?.address***REMOVED***</span>
        <span className="font-bold mt-2">***REMOVED***product?.name***REMOVED***</span>
        <span className="font-bold text-xl mt-2">***REMOVED***price***REMOVED*** 원</span>
      </div>
      <Separate />
      <div className="flex flex-col mt-5">
        <span className="font-bold text-lg">상품 기본 정보</span>
        <span className="font-bold">상품구성</span>
        <span className="font-bold">방문상담 소요시간</span>
      </div>
    </div>
  );
***REMOVED***;

export default BoardContent;
