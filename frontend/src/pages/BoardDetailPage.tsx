// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import FooterButton from "@/components/BoardDetailPage/FooterButton";
import BoardAsk from "../components/BoardDetailPage/BoardAsk";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";
// import ***REMOVED*** detailProduct, getPhone, getReviewList ***REMOVED*** from "@/apis/productApi";
// import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";

const BoardDetail = () => ***REMOVED***
  // const ***REMOVED*** productId ***REMOVED*** = useParams();

  // //== 상품 상세 데이터 ==//
  // const ***REMOVED*** data: productDetail ***REMOVED*** = useQuery(
  //   ['detailProduct', productId],
  //   () => detailProduct(productId),
  //   ***REMOVED***enabled: !!productId***REMOVED***
  // );

  //== 장바구니 담기 ==//
  const addToCart = async () => ***REMOVED***
    // await addProductToCart(productId);
  ***REMOVED***;

  // //== 리뷰 리스트 ==//
  // const ***REMOVED*** data: reviewList ***REMOVED*** = useQuery(
  //   ['getReviewList', productId],
  //   () => getReviewList(productId),
  //   ***REMOVED***enabled: !!productId***REMOVED***
  // );

  const dummyData = [
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
  ];

  return (
    <div>
      <MainCarousel dummyData=***REMOVED***dummyData***REMOVED*** />
      <Tabs className="mt-5" defaultValue="info">
        <TabsList className="flex justify-center">
          <TabsTrigger value="info">상품 정보</TabsTrigger>
          <TabsTrigger value="review">리뷰</TabsTrigger>
          <TabsTrigger value="ask">문의 정보</TabsTrigger>
        </TabsList>

        ***REMOVED***/* 각 탭에 대응하는 콘텐츠를 렌더링 */***REMOVED***
        <TabsContent value="info">
          <BoardContent />
        </TabsContent>
        <TabsContent value="review">
          <BoardReview />
        </TabsContent>
        <TabsContent value="ask">
          <BoardAsk />
        </TabsContent>

        ***REMOVED***/* api 연결 후 */***REMOVED***
        ***REMOVED***/* <TabsContent value="info">
          <BoardContent boardDetail=***REMOVED***productDetail***REMOVED***/>
        </TabsContent>
        <TabsContent value="review">
          <BoardReview reviewList=***REMOVED***reviewList ?? []***REMOVED***/>
        </TabsContent>
        <TabsContent value="ask">
          <BoardAsk />
        </TabsContent> */***REMOVED***

        <div onClick=***REMOVED***addToCart***REMOVED***>
          <FooterButton />
        </div>
      </Tabs>
    </div>
  )
***REMOVED***
export default BoardDetail;