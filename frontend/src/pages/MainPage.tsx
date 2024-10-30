import BestBox from "@/components/MainPage/BestBox";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** getRankedProducts ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";

const Main = () => ***REMOVED***
  const dummyMain = [
    '/main/main1.png',
    '/main/main2.png',
    '/main/main3.png',
    '/main/main4.png',

  ];

  //== 베스트 ==//
  const ***REMOVED*** data: getRankedProductList ***REMOVED*** = useQuery('getRankedProducts', getRankedProducts);

  return (
    <div className="flex flex-col items-center mb-24">
      <MainCarousel imageList=***REMOVED***dummyMain***REMOVED*** />
      <div className="grid grid-cols-2 gap-8 mt-10">

        ***REMOVED***getRankedProductList?.map((product: Product, index) => (
          <Link to=***REMOVED***`/board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***index***REMOVED***>
            <BestBox key=***REMOVED***product.id***REMOVED*** index=***REMOVED***index+1***REMOVED*** src=***REMOVED***product.images[0]?.imageUrl***REMOVED*** title=***REMOVED***product.name***REMOVED*** price=***REMOVED***Number(product.price)***REMOVED*** />
          </Link>
        ))***REMOVED***

      </div>
    </div>
  );
***REMOVED***;

export default Main;
