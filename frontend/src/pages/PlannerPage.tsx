import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import PlannerListBox from "@/components/PlannerPage/PlannerListBox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

const Planner = () => ***REMOVED***
  const [studioList, setStudioList] = useState<Product[]>([]);
  const [dressList, setDressList] = useState<Product[]>([]);
  const [makeupList, setMakeupList] = useState<Product[]>([]);
  const [selectedList, setSelectedList] = useState<***REMOVED*** [type: string]: Product | null ***REMOVED***>(***REMOVED***
    STUDIO: null,
    DRESS: null,
    MAKEUP: null,
  ***REMOVED***);

  // const ***REMOVED*** data: cartList ***REMOVED*** = useQuery("getCartItems", getCartItems);

  const cartList: Product[] = [
    ***REMOVED***
      id: "1",
      type: "DRESS",
      name: "웨딩 드레스 대여",
      price: "1500000",
      address: "서울 강남구",
      content: "고급스러운 웨딩 드레스 대여 서비스입니다.",
      vendorName: "Elegant Bridal",
      vendorId: "vendor1",
      images: [],
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
      images: [],
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
      images: [],
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
      images: [],
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
      images: [],
    ***REMOVED***,
  ];

  useEffect(() => ***REMOVED***
    setStudioList(cartList.filter((item: Product) => item.type === "STUDIO"));
    setDressList(cartList.filter((item: Product) => item.type === "DRESS"));
    setMakeupList(cartList.filter((item: Product) => item.type === "MAKEUP"));
  ***REMOVED***, []);

  const totalAmount = Object.values(selectedList).reduce((acc, item) => acc + (Number(item?.price) || 0), 0).toLocaleString();

  const handleProductChange = (category: string, product: Product | null) => ***REMOVED***
    setSelectedList((prev) => (***REMOVED***
      ...prev,
      [category]: product,
    ***REMOVED***));
  ***REMOVED***;

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">
        ***REMOVED***/* <div className="flex items-center mt-5">
          <span className="text-sm">
            <span className="text-main2 font-bold">WEDDY 플래너&nbsp;</span>
            추천 상품
          </span>
        </div> */***REMOVED***

        <PlannerListBox
          category="STUDIO"
          productList=***REMOVED***studioList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
        />
        <PlannerListBox
          category="DRESS"
          productList=***REMOVED***dressList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
        />
        <PlannerListBox
          category="MAKEUP"
          productList=***REMOVED***makeupList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
        />
      </div>
      
      <div className="flex justify-end mr-10 mt-14">
        <div className="flex flex-col mr-3">
        ***REMOVED***Object.entries(selectedList).map(([category, item]) =>
          item?.name ? (
            <span key=***REMOVED***category***REMOVED*** className="my-1">
              ***REMOVED***item.name***REMOVED***
            </span>
          ) : null
        )***REMOVED***
          <span className="font-bold mt-2">총 가격: </span>
        </div>
        <div className="flex flex-col text-end">
        ***REMOVED***Object.entries(selectedList).map(([category, item]) =>
          item?.price ? (
            <span key=***REMOVED***category***REMOVED*** className="my-1">
              ***REMOVED***Number(item.price).toLocaleString()***REMOVED***원
            </span>
          ) : null
        )***REMOVED***
          <span className="font-bold mt-2">***REMOVED***totalAmount.toLocaleString()***REMOVED***원</span>
        </div>
      </div>
      
      <div className="flex justify-end mr-10 mt-5 mb-24">
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
***REMOVED***;

export default Planner;