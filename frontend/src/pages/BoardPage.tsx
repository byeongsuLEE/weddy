import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** ComboboxDemo ***REMOVED*** from "../common/Filter";
import SDMList from "../components/BoardPage/SDMList";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";
import ***REMOVED*** allProducts ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Board = () => ***REMOVED***
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [studioList, setStudioList] = useState<Product[]>([]);
  const [dressList, setDressList] = useState<Product[]>([]);
  const [makeupList, setMakeupList] = useState<Product[]>([]);

  const ***REMOVED*** data: allProductList ***REMOVED*** = useQuery('allProducts', allProducts);

  const handleRegionSelect = (value: string) => ***REMOVED***
    setSelectedRegion(value);
  ***REMOVED***;

  const handlePriceSelect = (value: string) => ***REMOVED***
    const price = parseInt(value.replace(/,/g, ""), 10);
    setSelectedPrice(price);
  ***REMOVED***;

  // Dummy data
  const regions = [
    ***REMOVED*** value: "서울", label: "서울" ***REMOVED***,
    ***REMOVED*** value: "부산", label: "부산" ***REMOVED***,
    ***REMOVED*** value: "대구", label: "대구" ***REMOVED***,
    ***REMOVED*** value: "대전", label: "대전" ***REMOVED***,
    ***REMOVED*** value: "인천", label: "인천" ***REMOVED***,
    ***REMOVED*** value: "광주", label: "광주" ***REMOVED***,
    ***REMOVED*** value: "울산", label: "울산" ***REMOVED***,
  ];

  const prices = [
    ***REMOVED*** value: "5000000", label: "5,000,000" ***REMOVED***,
    ***REMOVED*** value: "10000000", label: "10,000,000" ***REMOVED***,
    ***REMOVED*** value: "15000000", label: "15,000,000" ***REMOVED***,
  ];

  useEffect(() => ***REMOVED***
    if (allProductList) ***REMOVED***
      setProductList(allProductList);
      setFilteredProductList(allProductList);
    ***REMOVED***
  ***REMOVED***, [allProductList]);

  useEffect(() => ***REMOVED***
    if (productList) ***REMOVED***
      const filtered = productList.filter((product: Product) => ***REMOVED***
        const matchesRegion = selectedRegion ? product.address.includes(selectedRegion) : true;
        const matchesPrice = selectedPrice ? Number(product.price) <= selectedPrice : true;
        
        return matchesRegion && matchesPrice;
      ***REMOVED***);
      setFilteredProductList(filtered);
    ***REMOVED***
  ***REMOVED***, [selectedPrice, selectedRegion, productList]);

  useEffect(() => ***REMOVED***
    if (filteredProductList) ***REMOVED***
      setStudioList(filteredProductList.filter((product: Product) => product.type === "STUDIO"));
      setDressList(filteredProductList.filter((product: Product) => product.type === "DRESS"));
      setMakeupList(filteredProductList.filter((product: Product) => product.type === "MAKEUP"));
    ***REMOVED***
  ***REMOVED***, [filteredProductList]);

  return (
    <div className="mb-20 mt-5">
      <Tabs defaultValue="studio">
        <TabsList className="flex justify-center">
          <TabsTrigger value="studio">스튜디오</TabsTrigger>
          <TabsTrigger value="dress">드레스</TabsTrigger>
          <TabsTrigger value="makeup">메이크업</TabsTrigger>
        </TabsList>

        <div className="flex text-gray-600 justify-center gap-4 mt-5">
          <ComboboxDemo lists=***REMOVED***regions***REMOVED*** title="지역" onSelect=***REMOVED***handleRegionSelect***REMOVED*** />
          <ComboboxDemo lists=***REMOVED***prices***REMOVED*** title="가격" onSelect=***REMOVED***handlePriceSelect***REMOVED*** />
        </div>

        <TabsContent value="studio">
          <SDMList value="studio" productList=***REMOVED***studioList***REMOVED*** />
        </TabsContent>

        <TabsContent value="dress">
          <SDMList value="dress" productList=***REMOVED***dressList***REMOVED*** />
        </TabsContent>

        <TabsContent value="makeup">
          <SDMList value="makeup" productList=***REMOVED***makeupList***REMOVED*** />
        </TabsContent>
      </Tabs>
    </div>
  );
***REMOVED***;

export default Board;