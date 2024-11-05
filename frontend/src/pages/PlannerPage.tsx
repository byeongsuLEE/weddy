import TodoButton from "@/common/TodoButton";
import PlannerBox from "@/components/PlannerPage/PlannerBox";
// import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
// import ***REMOVED*** useRecoilValue ***REMOVED*** from "recoil";
// import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
// import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";

const Planner = () => ***REMOVED***
  // const recommendList = useRecoilValue(recommendState);
  // const [ studioList, setStudioList ] = useState<Product[]>([]);
  // const [ dressList, setDressList ] = useState<Product[]>([]);
  // const [ makeupList, setMakeupList ] = useState<Product[]>([]);

  // useEffect(() => ***REMOVED***
  //   if (recommendList) ***REMOVED***
  //     const studios: Product[] = [];
  //     const dresses: Product[] = [];
  //     const makeups: Product[] = [];

  //     recommendList.forEach((product) => ***REMOVED***
  //       switch (product.type) ***REMOVED***
  //         case "STUDIO":
  //           studios.push(product);
  //           break;
  //         case "DRESS":
  //           dresses.push(product);
  //           break;
  //         case "MAKEUP":
  //           makeups.push(product);
  //           break;
  //         default:
  //           break;
  //       ***REMOVED***
  //     ***REMOVED***);

  //     setStudioList(studios);
  //     setDressList(dresses);
  //     setMakeupList(makeups);
  //   ***REMOVED***
  // ***REMOVED***, [recommendList]);

  const dummyList = [
    ***REMOVED***
      category: '스튜디오',
      company: '포에버마인스튜디오',
      price: '10000000',
      content: '앨범1권(20P) + 기본 액자 1개'
    ***REMOVED***,
    ***REMOVED***
      category: '드레스',
      company: '루이즈 블랑',
      price: '37000000',
      content: '[촬영+본식] 드레스4벌'
    ***REMOVED***,
    ***REMOVED***
      category: '메이크업',
      company: '',
      price: '0',
      content: ''
    ***REMOVED***,
  ];

  const totalPrice = dummyList.reduce((acc, dummy) => acc + Number(dummy.price), 0);

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">
        ***REMOVED***/* <h1 className="my-3 text-main2">WEDDY 플래너</h1> */***REMOVED***
        <div className="flex items-center mt-5">
          <span className="text-sm">
            <span className="text-main2 font-bold">
              WEDDY 플래너&nbsp;
            </span>
            추천 상품</span>
        </div>
        ***REMOVED***dummyList.map((dummy, index) => (
          <PlannerBox key=***REMOVED***index***REMOVED*** title=***REMOVED***dummy.category***REMOVED*** company=***REMOVED***dummy.company***REMOVED*** price=***REMOVED***dummy.price***REMOVED*** content=***REMOVED***dummy.content***REMOVED*** />
        ))***REMOVED***

        ***REMOVED***/* ***REMOVED***studioList.map((product: Product) => (
          <PlannerBox key=***REMOVED***product.id***REMOVED*** title="스튜디오" company=***REMOVED***product.vendorName***REMOVED*** price=***REMOVED***product.price***REMOVED*** content=***REMOVED***product.content***REMOVED*** />
        ))***REMOVED***

        ***REMOVED***dressList.map((product: Product) => (
          <PlannerBox key=***REMOVED***product.id***REMOVED*** title="드레스" company=***REMOVED***product.vendorName***REMOVED*** price=***REMOVED***product.price***REMOVED*** content=***REMOVED***product.content***REMOVED*** />
        ))***REMOVED***

        ***REMOVED***makeupList.map((product: Product) => (
          <PlannerBox key=***REMOVED***product.id***REMOVED*** title="메이크업" company=***REMOVED***product.vendorName***REMOVED*** price=***REMOVED***product.price***REMOVED*** content=***REMOVED***product.content***REMOVED*** />
        ))***REMOVED*** */***REMOVED***

      </div>
      <div className="flex justify-end mr-10 mt-14">
        <div className="flex flex-col mr-3">
          ***REMOVED***dummyList.map((dummy, index) => (
            <span key=***REMOVED***index***REMOVED*** className="my-1">
              ***REMOVED***dummy.company ? dummy.company : "상품 없음"***REMOVED***
            </span>
          ))***REMOVED***
          <span className="font-bold mt-2">총 가격: </span>
        </div>
        <div className="flex flex-col text-end">
          ***REMOVED***dummyList.map((dummy, index) => (
            <span key=***REMOVED***index***REMOVED*** className="my-1">***REMOVED***dummy.price.toLocaleString()***REMOVED***원</span>
          ))***REMOVED***
          <span className="font-bold">
            ***REMOVED***totalPrice.toLocaleString()***REMOVED***원
          </span>
        </div>
      </div>
      <div className="flex justify-end mr-10 mt-5 mb-24">
        <TodoButton title="계약 요청" />
      </div>
    </div>
  )
***REMOVED***

export default Planner;