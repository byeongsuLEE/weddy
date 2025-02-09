import BestBox from "@/components/MainPage/BestBox";
import { MainCarousel } from "../components/MainPage/MainCarousel";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getRankedProducts } from "@/api/productApi";
import { Product } from "@/api/product.type";

const Main = () => {
  const dummyMain = [
    '/main/main1.png',
    '/main/main2.png',
    '/main/main3.png',
    '/main/main4.png',
  ];

  //== 베스트 ==//
  const { data: getRankedProductList } = useQuery('getRankedProducts', getRankedProducts);

  return (
    <div className="flex flex-col items-center mb-24">
      <MainCarousel imageList={dummyMain} />
      <div className="grid grid-cols-2 gap-10 mt-10">

        {getRankedProductList?.map((product: Product, index) => (
          <Link to={`/board/detail/${product.id}`} key={index}>
            <BestBox key={product.id} index={index+1} src={product.images[0]?.imageUrl} title={product.name} price={Number(product.price)} />
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Main;