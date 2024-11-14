import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import FooterButton from "@/components/BoardDetailPage/FooterButton";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";
import ***REMOVED*** detailProduct, getReviewList ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** addProductToCart ***REMOVED*** from "@/api/cartApi";

const BoardDetail = () => ***REMOVED***
  const ***REMOVED*** productId ***REMOVED*** = useParams();

  //== 상품 상세 데이터 ==//
  const ***REMOVED*** data: productDetail ***REMOVED*** = useQuery(
    ["detailProduct", productId],
    () => detailProduct(productId),
    ***REMOVED*** enabled: !!productId ***REMOVED***
  );
  
  //== 리뷰 리스트 ==//
  const ***REMOVED*** data: reviewList ***REMOVED*** = useQuery(
    ["getReviewList", productId],
    () => getReviewList(productId),
    ***REMOVED*** enabled: !!productId ***REMOVED***
  );

  //== 장바구니 담기 ==//
  const addToCart = async () => ***REMOVED***
    await addProductToCart(productId);
  ***REMOVED***;

  return (
    <div>
      <MainCarousel imageList=***REMOVED***productDetail?.images***REMOVED*** />

      <BoardContent product=***REMOVED***productDetail***REMOVED*** />
      <BoardReview reviewList=***REMOVED***reviewList ?? []***REMOVED*** />

      <div onClick=***REMOVED***addToCart***REMOVED***>
        <FooterButton />
      </div>

    </div>
  );
***REMOVED***;

export default BoardDetail;