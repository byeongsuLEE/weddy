import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import FooterButton from "@/components/BoardDetailPage/FooterButton";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";
import ***REMOVED*** detailProduct, getReviewList ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** addProductToCart ***REMOVED*** from "@/api/cartApi";
import Separate from "@/common/Separate";
import AlertBox from "@/common/AlertBox";
import ***REMOVED*** useState ***REMOVED*** from "react";

const BoardDetail = () => ***REMOVED***
  const ***REMOVED*** productId ***REMOVED*** = useParams();
  const [showAlert, setShowAlert] = useState(false);

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
    setShowAlert(true); // 알림 상태를 true로 설정
    setTimeout(() => setShowAlert(false), 2000); // 3초 후 알림 상태를 false로 변경
  ***REMOVED***;

  return (
    <div>
      ***REMOVED***showAlert && <AlertBox title="상품 담기" description="장바구니에 상품 담기 완료!"/>***REMOVED***
      <MainCarousel imageList=***REMOVED***productDetail?.images***REMOVED*** />

      <BoardContent product=***REMOVED***productDetail***REMOVED*** />
      <div className="mx-5 mb-5">
      <Separate />
      </div>
      <span className="m-5 font-bold">Review</span>
      <BoardReview reviewList=***REMOVED***reviewList ?? []***REMOVED*** />

      <div onClick=***REMOVED***addToCart***REMOVED***>
        <FooterButton />
      </div>

    </div>
  );
***REMOVED***;

export default BoardDetail;