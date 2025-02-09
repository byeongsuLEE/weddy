import Search from "@/common/Search";
import { TabsContent } from "@radix-ui/react-tabs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/api/product.type";
import SDMBox from "./SDMBox";

interface SDMListProps {
  value: string;
  productList: Product[];
}

const SDMList = ({ value, productList }: SDMListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  // const search = (searchTerm: string) => {
  //   const data = productList.filter((product: Product) => product.name === searchTerm);
  //   setFilteredList(data);
  //   setSearchTerm(searchTerm);
  // };

  // const search = (searchTerm: string) => {
  //   const data = productList.filter((product: Product) =>
  //     product.name.includes(searchTerm)
  //   );
  //   setFilteredList(data);
  //   setSearchTerm(searchTerm);
  // };

  useEffect(() => {
    if (searchTerm) {
      const filteredData = productList.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) // 대소문자 구분 없이 검색
      );
      setFilteredList(filteredData);
    } else {
      setFilteredList(productList);
    }
  }, [searchTerm, productList]);
  

  return (
    <div>
      <TabsContent value={value} className="flex flex-wrap justify-center gap-8">
      <Search
          search={(term: string) => setSearchTerm(term)} // 검색어를 실시간 업데이트
        />

        {searchTerm ? (
          filteredList && filteredList.length > 0 ? (
            filteredList.map((product: Product) => (
              <Link to={`board/detail/${product.id}`} key={product.id}>
                <SDMBox src={product.images[0].imageUrl} name={product.name} price={product.price} />
              </Link>
            ))
          ) : (
            <p>해당 상품이 없습니다.</p>
          )
        ) : productList && productList.length > 0 ? (
          productList.map((product: Product) => (
            product.images.length > 0 ? (
              <Link to={`/board/detail/${product.id}`} key={product.id}>
                <SDMBox src={product.images[0].imageUrl} name={product.name} price={product.price} />
              </Link>
            ) : null
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </TabsContent>
    </div>
  );
};

export default SDMList;
