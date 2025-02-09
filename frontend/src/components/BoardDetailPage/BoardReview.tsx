import { ReviewData } from "@/api/product.type";
import { Rating } from "@mui/material";

interface BoardReviewProp {
  reviewList: ReviewData[]
};

const BoardReview = ({ reviewList }: BoardReviewProp) => {
  // console.log(reviewList);

  return (
    <div className="mx-5">
      {reviewList.length > 0 ? (
        reviewList.map((review, index) => (
          <div key={index} className="bg-white h-[80px] rounded-xl px-5 justify-center flex flex-col my-5">
            <div className="flex items-center">
            <span className="font-bold mr-3">
            {review.content}
            </span>
            <span>
            <Rating value={review.score} readOnly />
            </span>
            </div>
            <span>
            {review.date}
            </span>
            
          </div>
          


        ))
      ) : (
        <p className="text-center">아직 리뷰가 없습니다.</p>
      )}
    </div>

  )
}

export default BoardReview;