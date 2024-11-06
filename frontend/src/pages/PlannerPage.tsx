import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
// import ***REMOVED*** getCartItems ***REMOVED*** from "@/api/productApi";
import TodoButton from "@/common/TodoButton";
import PlannerBox from "@/components/PlannerPage/PlannerBox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Planner = () => ***REMOVED***
  const [ studio, setStudio ] = useState<Product | undefined>();
  const [ dress, setDress ] = useState<Product | undefined>();
  const [ makeup, setMakeup] = useState<Product | undefined>();

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
    // ***REMOVED***
    //   id: "3",
    //   type: "MAKEUP",
    //   name: "본식 메이크업",
    //   price: "100000",
    //   address: "서울 종로구",
    //   content: "본식 메이크업 서비스로 최고의 하루를 준비하세요.",
    //   vendorName: "Wedding Palace",
    //   vendorId: "vendor3",
    //   images: [],
    // ***REMOVED***
  ];

  useEffect(() => ***REMOVED***
    setStudio(cartList.find((item: Product) => item.type === "STUDIO"));
    setDress(cartList.find((item: Product) => item.type === "DRESS"));
    setMakeup(cartList.find((item: Product) => item.type === "MAKEUP"));
  ***REMOVED***, []);

  const totalPrice = cartList.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">
        ***REMOVED***/* <h1 className="my-3 text-main2">WEDDY 플래너</h1> */***REMOVED***
        <div className="flex items-center mt-5">
          <span className="text-sm">
            <span className="text-main2 font-bold">WEDDY 플래너&nbsp;</span>
            추천 상품
          </span>
        </div>
        ***REMOVED***/* ***REMOVED***cartList.map((item: Product) => (
          <PlannerBox
            key=***REMOVED***item.id***REMOVED***
            item=***REMOVED***item***REMOVED***
          />
        ))***REMOVED*** */***REMOVED***

        <PlannerBox category="STUDIO" item=***REMOVED***studio***REMOVED*** />
        <PlannerBox category="DRESS" item=***REMOVED***dress***REMOVED*** />
        <PlannerBox category="MAKEUP" item=***REMOVED***makeup***REMOVED*** />

      </div>
      <div className="flex justify-end mr-10 mt-14">
        <div className="flex flex-col mr-3">
          ***REMOVED***cartList.map((item: Product) => (
            <span key=***REMOVED***item.id***REMOVED*** className="my-1">
              ***REMOVED***item.vendorName ? item.vendorName : "상품 없음"***REMOVED***
            </span>
          ))***REMOVED***
          <span className="font-bold mt-2">총 가격: </span>
        </div>
        <div className="flex flex-col text-end">
          ***REMOVED***cartList.map((item: Product) => (
            <span key=***REMOVED***item.id***REMOVED*** className="my-1">
              ***REMOVED***Number(item.price).toLocaleString()***REMOVED***원
            </span>
          ))***REMOVED***
          <span className="font-bold">***REMOVED***totalPrice.toLocaleString()***REMOVED***원</span>
        </div>
      </div>
      <div className="flex justify-end mr-10 mt-5 mb-24">
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
***REMOVED***;

export default Planner;
