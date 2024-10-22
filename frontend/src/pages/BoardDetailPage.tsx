import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";
import BoardAsk from "../components/BoardDetailPage/BoardAsk";
import BoardContent from "../components/BoardDetailPage/BoardContent";
import BoardReview from "../components/BoardDetailPage/BoardReview";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** useParams ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** addProductToCart, detailProduct ***REMOVED*** from "../apis/productApi";

const BoardDetail = () => ***REMOVED***
  const ***REMOVED*** productId ***REMOVED*** = useParams();

  //== 상품 상세 데이터 ==//
  const ***REMOVED*** data: productDetail, isLoading ***REMOVED*** = useQuery(
    ['detailProduct', productId],
    () => detailProduct(productId),
    ***REMOVED***enabled: !!productId***REMOVED***
  );

  //== 장바구니 추가 ==//
  const addCart = async () => ***REMOVED***
    await addProductToCart(productId);
  ***REMOVED***;

  const dummyData = [
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
  ];

  if (isLoading) ***REMOVED***
    return <p>Loading</p>;
  ***REMOVED***;

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
      </Tabs>
    </div>
  )
***REMOVED***
export default BoardDetail;