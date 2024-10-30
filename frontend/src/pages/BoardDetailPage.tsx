import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import FooterButton from "@/components/BoardDetailPage/FooterButton";
import BoardAsk from "../components/BoardDetailPage/BoardAsk";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs"
import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";
import ***REMOVED*** addProductToCart, detailProduct, getReviewList ***REMOVED*** from "@/api/productApi";

const BoardDetail = () => ***REMOVED***
  const ***REMOVED*** productId ***REMOVED*** = useParams();

  //== 상품 상세 데이터 ==//
  const ***REMOVED*** data: productDetail ***REMOVED*** = useQuery(
    ["detailProduct", productId],
    () => detailProduct(productId),
    ***REMOVED*** enabled: !!productId ***REMOVED***
  );

  //== 장바구니 담기 ==//
  const addToCart = async () => ***REMOVED***
    await addProductToCart(productId);
  ***REMOVED***;

  //== 리뷰 리스트 ==//
  const ***REMOVED*** data: reviewList ***REMOVED*** = useQuery(
    ["getReviewList", productId],
    () => getReviewList(productId),
    ***REMOVED*** enabled: !!productId ***REMOVED***
  );

  return (
    <div>
      <MainCarousel imageList=***REMOVED***productDetail?.images***REMOVED*** />
      <Tabs className="mt-5" defaultValue="info">
        <TabsList className="flex justify-center">
          <TabsTrigger value="info">상품 정보</TabsTrigger>
          <TabsTrigger value="review">리뷰</TabsTrigger>
          <TabsTrigger value="ask">문의 정보</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <BoardContent product=***REMOVED***productDetail***REMOVED*** />
        </TabsContent>
        <TabsContent value="review">
          <BoardReview reviewList=***REMOVED***reviewList ?? []***REMOVED*** />
        </TabsContent>
        <TabsContent value="ask">
          <BoardAsk />
        </TabsContent>

        <div onClick=***REMOVED***addToCart***REMOVED***>
          <FooterButton />
        </div>
      </Tabs>
    </div>
  );
***REMOVED***;
export default BoardDetail;
