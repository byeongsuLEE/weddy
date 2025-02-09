import { useState, useMemo } from "react";
import { ComboboxDemo } from "../common/Filter";
import SDMList from "../components/BoardPage/SDMList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { allProducts } from "@/api/productApi";
import { Product } from "@/api/product.type";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const Board = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "studio";

  const { data: allProductList } = useQuery("allProducts", allProducts);

  const handleTabChange = (value: string) => setSearchParams({ category: value });

  const handleRegionSelect = (value: string) => setSelectedRegion(value);

  const handlePriceSelect = (value: string) =>
    setSelectedPrice(parseInt(value.replace(/,/g, ""), 10));

  const filteredProductList = useMemo(() => {
    return allProductList?.filter((product: Product) => {
      const matchesRegion = selectedRegion ? product.address.includes(selectedRegion) : true;
      const matchesPrice = selectedPrice ? Number(product.price) <= selectedPrice : true;
      return matchesRegion && matchesPrice;
    });
  }, [selectedRegion, selectedPrice, allProductList]);

  const regions = [
    { value: "서울", label: "서울" },
    { value: "부산", label: "부산" },
    { value: "대구", label: "대구" },
    { value: "대전", label: "대전" },
    { value: "인천", label: "인천" },
    { value: "광주", label: "광주" },
    { value: "울산", label: "울산" },
  ];

  const prices = [
    { value: "5000000", label: "5,000,000" },
    { value: "10000000", label: "10,000,000" },
    { value: "15000000", label: "15,000,000" },
  ];

  return (
    <div className="mb-20 mt-5">
      <Tabs defaultValue={category} onValueChange={handleTabChange}>
        <TabsList className="flex justify-center">
          <TabsTrigger value="studio">스튜디오</TabsTrigger>
          <TabsTrigger value="dress">드레스</TabsTrigger>
          <TabsTrigger value="makeup">메이크업</TabsTrigger>
        </TabsList>

        <div className="flex text-gray-600 justify-center gap-4 mt-5">
          <ComboboxDemo lists={regions} title="지역" onSelect={handleRegionSelect} />
          <ComboboxDemo lists={prices} title="가격" onSelect={handlePriceSelect} />
        </div>

        {["studio", "dress", "makeup"].map((type) => (
          <TabsContent key={type} value={type}>
            <SDMList
              value={type}
              productList={Array.isArray(filteredProductList) ? filteredProductList.filter(
                (product) => product.type === type.toUpperCase()
              ) : []}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Board;