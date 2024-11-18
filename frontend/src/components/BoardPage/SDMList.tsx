import Search from "@/common/Search";
import ***REMOVED*** TabsContent ***REMOVED*** from "@radix-ui/react-tabs";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import SDMBox from "./SDMBox";

interface SDMListProps ***REMOVED***
  value: string;
  productList: Product[];
***REMOVED***

const SDMList = (***REMOVED*** value, productList ***REMOVED***: SDMListProps) => ***REMOVED***
  const [searchTerm, setSearchTerm] = useState<string>();
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  // const search = (searchTerm: string) => ***REMOVED***
  //   const data = productList.filter((product: Product) => product.name === searchTerm);
  //   setFilteredList(data);
  //   setSearchTerm(searchTerm);
  // ***REMOVED***;

  // const search = (searchTerm: string) => ***REMOVED***
  //   const data = productList.filter((product: Product) =>
  //     product.name.includes(searchTerm)
  //   );
  //   setFilteredList(data);
  //   setSearchTerm(searchTerm);
  // ***REMOVED***;

  useEffect(() => ***REMOVED***
    if (searchTerm) ***REMOVED***
      const filteredData = productList.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) // 대소문자 구분 없이 검색
      );
      setFilteredList(filteredData);
    ***REMOVED*** else ***REMOVED***
      setFilteredList(productList);
    ***REMOVED***
  ***REMOVED***, [searchTerm, productList]);
  

  return (
    <div>
      <TabsContent value=***REMOVED***value***REMOVED*** className="flex flex-wrap justify-center gap-8">
      <Search
          search=***REMOVED***(term: string) => setSearchTerm(term)***REMOVED*** // 검색어를 실시간 업데이트
        />

        ***REMOVED***searchTerm ? (
          filteredList && filteredList.length > 0 ? (
            filteredList.map((product: Product) => (
              <Link to=***REMOVED***`board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
                <SDMBox src=***REMOVED***product.images[0].imageUrl***REMOVED*** name=***REMOVED***product.name***REMOVED*** price=***REMOVED***product.price***REMOVED*** />
              </Link>
            ))
          ) : (
            <p>해당 상품이 없습니다.</p>
          )
        ) : productList && productList.length > 0 ? (
          productList.map((product: Product) => (
            product.images.length > 0 ? (
              <Link to=***REMOVED***`/board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
                <SDMBox src=***REMOVED***product.images[0].imageUrl***REMOVED*** name=***REMOVED***product.name***REMOVED*** price=***REMOVED***product.price***REMOVED*** />
              </Link>
            ) : null
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )***REMOVED***
      </TabsContent>
    </div>
  );
***REMOVED***;

export default SDMList;
