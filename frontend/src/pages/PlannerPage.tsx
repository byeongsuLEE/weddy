import PlannerBox from "@/components/PlannerPage/PlannerBox";
import GiftIcon from "@/icons/GiftIcon";


const Planner = () => ***REMOVED***
  const dummyList = [
    ***REMOVED***
      category: '스튜디오',
      company: '포에버마인스튜디오',
      price: 10000000,
      content: '앨범1권(20P) + 기본 액자 1개'
    ***REMOVED***,
    ***REMOVED***
      category: '드레스',
      company: '루이즈 블랑',
      price: 37000000,
      content: '[촬영+본식] 드레스4벌'
    ***REMOVED***,
    ***REMOVED***
      category: '메이크업',
      company: '',
      price: 0,
      content: ''
    ***REMOVED***,
  ]

  const totalPrice = dummyList.reduce((acc, dummy) => acc + dummy.price, 0);


  return (
    <div className="relative">
      <div className="m-5 flex flex-col items-center">
        <h1 className="my-3 text-main2">WEDDY 플래너</h1>
        <div className="flex items-center">
        <span className="text-sm">WEDDY 플래너가 추천하는 상품</span>
          <GiftIcon/>
        </div>
        ***REMOVED***dummyList.map((dummy, index) => (
          <PlannerBox key=***REMOVED***index***REMOVED*** title=***REMOVED***dummy.category***REMOVED*** company=***REMOVED***dummy.company***REMOVED*** price=***REMOVED***dummy.price***REMOVED*** content=***REMOVED***dummy.content***REMOVED*** />
        ))***REMOVED***

      </div>
      <div className="flex justify-end mr-10 mt-20 mb-24">
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
    </div>
  )
***REMOVED***

export default Planner;