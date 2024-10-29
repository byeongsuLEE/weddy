import PlannerBox from "@/components/PlannerPage/PlannerBox";


const Planner = () => ***REMOVED***

  return (
    <div className="relative">
    <div className="m-5 flex flex-col items-center">
      <h1 className="my-3 text-main2">WEDDY 플래너</h1>
      <span className="text-sm mb-5">WEDDY 플래너가 추천하는 상품</span>
      <PlannerBox title="스튜디오" />
      <PlannerBox title="드레스" />
      <PlannerBox title="메이크업" />
    </div>
    <div className="flex justify-end mr-10 mt-20 mb-24">
      <div className="flex flex-col mr-3">
        <span className="my-1">스튜디오 업체명:</span>
        <span className="my-1">드레스 업체명: </span>
        <span className="my-1">매이크업 업체명: </span>
        <span className="font-bold">총 가격: </span>
      </div>
      <div className="flex flex-col text-end">
        <span className="my-1">100000원</span>
        <span className="my-1">100000원</span>
        <span className="my-1">100000원</span>
        <span className="font-bold"> 100000원</span>
      </div>
    </div>
    </div>
  )
***REMOVED***

export default Planner;