import ***REMOVED*** ReviewData ***REMOVED*** from "@/api/product.type";

interface BoardReviewProp ***REMOVED***
  reviewList: ReviewData[]
***REMOVED***;

const BoardReview = (***REMOVED*** reviewList ***REMOVED***: BoardReviewProp) => ***REMOVED***
  console.log(reviewList);
  return (
    <div className="m-5">
      ***REMOVED***reviewList.length > 0 ? (
        reviewList.map((review, index) => (
          <div key=***REMOVED***index***REMOVED*** className="border-b-2 border-gray-200 py-5">
            <div className="flex justify-between">
              <span className="font-bold">***REMOVED***review.content***REMOVED***</span>
              <span>***REMOVED***review.date***REMOVED***</span>
            </div>
            <div className="flex justify-between">
              <span>***REMOVED***review.content***REMOVED***</span>
              <span>***REMOVED***review.score***REMOVED***점</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">아직 리뷰가 없습니다.</p>
      )***REMOVED***
    </div>

  )
***REMOVED***

export default BoardReview;