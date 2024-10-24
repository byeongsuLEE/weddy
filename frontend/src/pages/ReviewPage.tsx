import Separate from "@/common/Separate";
import TodoButton from "@/common/TodoButton";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const Review = () => ***REMOVED***
  const navigate = useNavigate();
  const toMain = () => ***REMOVED***
    navigate('/');
  ***REMOVED***
  return (
    <>
    <div className="bg-white flex flex-col h-[200px] justify-center m-5 rounded-2xl p-10">
      <span>업체명</span>
      <Separate />
      <span>상품명</span>
      <span>총금액</span>
    </div>
      <div className="bg-white h-[450px] m-5 rounded-2xl p-10 mb-24">
        <h1>어떤 점이 좋았나요?</h1>
        <textarea className="border border-gray-400 rounded-lg p-5 h-[300px] w-[280px] mt-5" name="review" id="review"></textarea>
        <div className="flex justify-end mt-3" onClick=***REMOVED***toMain***REMOVED***>
        <TodoButton title="리뷰 등록" colorId=***REMOVED***1***REMOVED*** />
        </div>
      </div>
    </>
  )
***REMOVED***

export default Review;