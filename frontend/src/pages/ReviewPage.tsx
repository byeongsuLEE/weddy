import ***REMOVED*** ReviewData ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** detailProduct, submitReview ***REMOVED*** from "@/api/productApi";
import Separate from "@/common/Separate";
import TodoButton from "@/common/TodoButton";
import RatingBox from "@/components/ReviewPage/RatingBox";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useNavigate, useParams ***REMOVED*** from "react-router-dom";

const Review = () => ***REMOVED***
  const navigate = useNavigate();
  const ***REMOVED*** productId ***REMOVED*** = useParams();
  const formattedDate = new Date().toLocaleDateString('ko-KR', ***REMOVED*** year: 'numeric', month: '2-digit', day: '2-digit' ***REMOVED***).replace(/\./g, '-').replace(/\s/g, '').slice(0, 10);

  const [reviewData, setReviewData] = useState<ReviewData>(***REMOVED***
    content: "",
    date: formattedDate,
    score: 0
  ***REMOVED***);

  //== 상품 정보 ==//
  const ***REMOVED*** data: product ***REMOVED*** = useQuery(
    ['detailProduct', productId],
    () => detailProduct(productId),
    ***REMOVED***enabled: !!productId***REMOVED***
  );

  const price = product?.price.toLocaleString();

  //== 상태 업데이트 ==//
  const updateReviewData = (key: keyof ReviewData, value: any) => ***REMOVED***
    setReviewData((prev) => ***REMOVED*** return ***REMOVED*** ...prev, [key]: value ***REMOVED*** ***REMOVED***);
  ***REMOVED***;

  //== 리뷰 등록 ==//
  const handleSubmit = async () => ***REMOVED***
    await submitReview(reviewData, productId);
    navigate('/');
  ***REMOVED***;

  return (
    <div className="mb-24">
      <div className="bg-white flex flex-col h-[200px] justify-center m-5 rounded-2xl p-10">
        <span>***REMOVED***product?.vendorName***REMOVED***</span>
        <Separate />
        <span>***REMOVED***product?.name***REMOVED***</span>
        <span>***REMOVED***price***REMOVED*** 원</span>
      </div>
      <div className="bg-white h-[120px] rounded-2xl p-5 m-5 flex flex-col items-center mb-3">
        <h1 className="mb-1">상품은 만족하셨나요?</h1>
        <RatingBox getScore=***REMOVED***(score) => updateReviewData("score", score)***REMOVED*** />
        <span className="text-gray-400 text-xs my-2">선택해주세요.</span>
      </div>
      <div className="bg-white h-[350px] m-5 rounded-2xl p-5">
        <div className="flex flex-col items-center ">
          <h1>어떤 점이 좋았나요?</h1>
          <textarea
            className="border border-gray-400 rounded-lg p-5 h-[250px] w-[280px] mt-5"
            name="review"
            id="review"
            onChange=***REMOVED***(e) => updateReviewData('content', e.target.value)***REMOVED***
          >
          </textarea>
        </div>
      </div>
      <div className="flex justify-end mt-3 mx-5" onClick=***REMOVED***handleSubmit***REMOVED***>
        <TodoButton title="리뷰 등록" colorId=***REMOVED***1***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***

export default Review;