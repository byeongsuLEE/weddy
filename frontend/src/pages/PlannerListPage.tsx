import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** addProductToCart ***REMOVED*** from "@/api/productApi";
import TodoButton from "@/common/TodoButton";
import RecommendBox from "@/components/PlannerPage/RecommendBox";
import ***REMOVED*** RadioGroup ***REMOVED*** from "@/components/ui/radio-group";
// import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate, useParams ***REMOVED*** from "react-router-dom";
// import ***REMOVED*** useRecoilValue ***REMOVED*** from "recoil";

const PlannerList = () => ***REMOVED***
  const navigate = useNavigate();
  const ***REMOVED*** category ***REMOVED*** = useParams();
  const [categoryList, setCategoryList] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // const recommendList = useRecoilValue(recommendState);

  const recommendList: Product[] = [
    ***REMOVED***
      id: "1",
      type: "DRESS",
      name: "웨딩 드레스 대여",
      price: "1500000",
      address: "서울 강남구",
      content: "고급스러운 웨딩 드레스 대여 서비스입니다.",
      vendorName: "Elegant Bridal",
      vendorId: "vendor1",
      images: [***REMOVED***imageUrl: "/dummy/test2.jpg"***REMOVED***],
    ***REMOVED***,
    ***REMOVED***
      id: "2",
      type: "STUDIO",
      name: "웨딩 촬영 패키지",
      price: "3000000",
      address: "서울 마포구",
      content: "웨딩 사진 촬영 패키지로 특별한 순간을 담아드립니다.",
      vendorName: "Studio Bliss",
      vendorId: "vendor2",
      images: [***REMOVED***imageUrl: "/dummy/test1.jpg"***REMOVED***],
    ***REMOVED***,
    ***REMOVED***
      id: "3",
      type: "MAKEUP",
      name: "본식 메이크업",
      price: "100000",
      address: "서울 종로구",
      content: "본식 메이크업 서비스로 최고의 하루를 준비하세요.",
      vendorName: "Wedding Palace",
      vendorId: "vendor3",
      images: [***REMOVED***imageUrl: "/icons/gift.png"***REMOVED***],
    ***REMOVED***,
    ***REMOVED***
      id: "4",
      type: "STUDIO",
      name: "꽃 장식 서비스",
      price: "2000000",
      address: "서울 서초구",
      content: "아름다운 꽃 장식으로 예식을 더욱 빛나게 만들어드립니다.",
      vendorName: "Blooming Flora",
      vendorId: "vendor4",
      images: [***REMOVED***imageUrl: "/icons/ring.png"***REMOVED***],
    ***REMOVED***,
    ***REMOVED***
      id: "5",
      type: "DRESS",
      name: "본식+피로연 드레스",
      price: "500000",
      address: "서울 강남구",
      content: "본식과 피로연에서 입을 수 있는 드레스 대여 서비스입니다.",
      vendorName: "Gourmet Delight",
      vendorId: "vendor5",
      images: [***REMOVED***imageUrl: "/dummy/test1.jpg"***REMOVED***],
    ***REMOVED***,
  ];

  useEffect(() => ***REMOVED***
    setCategoryList(
      recommendList.filter((item: Product) => item.type === category)
    );
  ***REMOVED***, [recommendList, category]);

  const handleCheckboxChange = (index: number) => ***REMOVED***
    setSelectedIndex(index === selectedIndex ? null : index);
    console.log(categoryList[index]);
  ***REMOVED***;

  const renderCategory = ***REMOVED***
    STUDIO: "스튜디오",
    DRESS: "드레스",
    MAKEUP: "메이크업",
  ***REMOVED***[category ?? ""];

  const addToCart = async () => ***REMOVED***
    if (selectedIndex !== null) ***REMOVED***
      await addProductToCart(categoryList[selectedIndex].id);
      navigate("/planner");
    ***REMOVED***
  ***REMOVED***;

  return (
    <RadioGroup>
      <h1 className="text-center mt-10">***REMOVED***renderCategory***REMOVED***</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-5 mb-5">
        ***REMOVED***categoryList.map((item: Product, index) => (
          <div key=***REMOVED***index***REMOVED***>
            <RecommendBox
              isSelected=***REMOVED***selectedIndex === index***REMOVED***
              onSelect=***REMOVED***() => handleCheckboxChange(index)***REMOVED***
              src=***REMOVED***item.images[0].imageUrl***REMOVED***
              name=***REMOVED***item.name***REMOVED***
              price=***REMOVED***item.price***REMOVED***
            />
          </div>
        ))***REMOVED***
      </div>
      <div onClick=***REMOVED***addToCart***REMOVED*** className="flex justify-end mr-10 mb-20">
        ***REMOVED***/* 상품담기 api 연결하고 planner로 navigate */***REMOVED***
        <TodoButton title="상품 담기" />
      </div>
    </RadioGroup>
  );
***REMOVED***;

export default PlannerList;
