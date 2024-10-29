import TodoButton from "@/common/TodoButton";
import RecommendBox from "@/components/PlannerPage/RecommendBox";
import ***REMOVED*** RadioGroup ***REMOVED*** from "@/components/ui/radio-group";
import ***REMOVED*** useState ***REMOVED*** from 'react';
import ***REMOVED*** useParams, useNavigate ***REMOVED*** from 'react-router-dom';

const PlannerList = () => ***REMOVED***
  const [selectedValue, setSelectedValue] = useState<string>();
  const category = useParams().category ?? '';
  const renderCategory = ***REMOVED***
    'studio': '스튜디오',
    'dress': '드레스',
    'makeup': '메이크업',
  ***REMOVED***[category];

  const navigate = useNavigate();
  const goPlanner =()=>***REMOVED***
    navigate('/planner')
  ***REMOVED***
  
  const handleSelect = (value: string) => ***REMOVED***
    setSelectedValue(value);
    console.log("선택된 값:", value); // 콘솔에 선택된 값 출력
  ***REMOVED***;

  const dummyList = [
    ***REMOVED***
      src: "/dummy/test1.jpg",
      name: "업체1",
      price: 100000
    ***REMOVED***,
    ***REMOVED***
      src: "/dummy/test1.jpg",
      name: "업체2",
      price: 100000
    ***REMOVED***,
    ***REMOVED***
      src: "/dummy/test1.jpg",
      name: "업체3",
      price: 100000
    ***REMOVED***,
    ***REMOVED***
      src: "/dummy/test1.jpg",
      name: "업체4",
      price: 100000
    ***REMOVED***,
  ]
  return (
    <RadioGroup value=***REMOVED***selectedValue***REMOVED*** onValueChange=***REMOVED***handleSelect***REMOVED***>
      <h1 className="text-center mt-10">***REMOVED***renderCategory***REMOVED***</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-5 mb-5">
        ***REMOVED***dummyList.map((dummy, index) => (
          <div key=***REMOVED***index***REMOVED***>
            <RecommendBox isSelected=***REMOVED***selectedValue === dummy.name***REMOVED*** onSelect=***REMOVED***handleSelect***REMOVED*** src=***REMOVED***dummy.src***REMOVED*** name=***REMOVED***dummy.name***REMOVED*** price=***REMOVED***dummy.price***REMOVED*** />
          </div>
        ))***REMOVED***
      </div>
      <div onClick=***REMOVED***goPlanner***REMOVED*** className="flex justify-end mr-10 mb-20">
      ***REMOVED***/* 상품담기 api 연결하고 planner로 navigate */***REMOVED***
      <TodoButton title="상품 담기"/>
      </div>
    </RadioGroup>
  )
***REMOVED***
export default PlannerList;