import { useQuery } from "react-query";
import FooterButton from "@/components/BoardDetailPage/FooterButton";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import { MainCarousel } from "../components/MainPage/MainCarousel";
import { useParams } from "react-router-dom";
import { detailProduct, getReviewList } from "@/api/productApi";
import { addProductToCart } from "@/api/cartApi";
import Separate from "@/common/Separate";
import AlertBox from "@/common/AlertBox";
import { useState } from "react";

const BoardDetail = () => {
  const { productId } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  //== 상품 상세 데이터 ==//
  const { data: productDetail } = useQuery(
    ["detailProduct", productId],
    () => detailProduct(productId),
    { enabled: !!productId }
  );
  
  //== 리뷰 리스트 ==//
  const { data: reviewList } = useQuery(
    ["getReviewList", productId],
    () => getReviewList(productId),
    { enabled: !!productId }
  );

  //== 장바구니 담기 ==//
  const addToCart = async () => {
    await addProductToCart(productId);
    setShowAlert(true); // 알림 상태를 true로 설정
    setTimeout(() => setShowAlert(false), 2000); // 3초 후 알림 상태를 false로 변경
  };

  return (
    <div>
      {showAlert && <AlertBox title="상품 담기" description="장바구니에 상품 담기 완료!"/>}
      <MainCarousel imageList={productDetail?.images} />

      <BoardContent product={productDetail} />
      <div className="mx-5 mb-5">
      <Separate />
      </div>
      <span className="m-5 font-bold">Review</span>
      <BoardReview reviewList={reviewList ?? []} />

      <div onClick={addToCart}>
        <FooterButton />
      </div>

    </div>
  );
};

export default BoardDetail;