import ***REMOVED*** ReviewData ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** Rating ***REMOVED*** from "@mui/material";

interface BoardReviewProp ***REMOVED***
  reviewList: ReviewData[]
***REMOVED***;

const BoardReview = (***REMOVED*** reviewList ***REMOVED***: BoardReviewProp) => ***REMOVED***
  // console.log(reviewList);

  return (
    <div className="m-5">
      ***REMOVED***reviewList.length > 0 ? (
        reviewList.map((review, index) => (
          <div key=***REMOVED***index***REMOVED*** className="bg-white h-[80px] rounded-xl px-5 justify-center flex flex-col mb-2">
            <div className="flex items-center">
            <span className="font-bold mr-3">
            ***REMOVED***review.content***REMOVED***
            </span>
            <span>
            <Rating value=***REMOVED***review.score***REMOVED*** readOnly />
            </span>
            </div>
            <span>
            ***REMOVED***review.date***REMOVED***
            </span>
            
          </div>
          


        ))
      ) : (
        <p className="text-center">아직 리뷰가 없습니다.</p>
      )***REMOVED***
    </div>

  )
***REMOVED***

export default BoardReview;