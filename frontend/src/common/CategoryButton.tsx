import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

interface categoryProps ***REMOVED***
  changeCategory: (category: string) => void;
***REMOVED***;

const CategoryButton=(***REMOVED*** changeCategory ***REMOVED***: categoryProps)=>***REMOVED***
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => ***REMOVED***
    setSelectedButton(buttonName);
  ***REMOVED***;

  useEffect(() => ***REMOVED***
    if (selectedButton)***REMOVED***
      changeCategory(selectedButton);
    ***REMOVED***;
  ***REMOVED***, [selectedButton]);

  return (
    <div className="flex justify-center">
    <button
    onClick=***REMOVED***() => handleButtonClick('스튜디오')***REMOVED***
    className=***REMOVED***`bg-main3 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === '스튜디오' ? 'border-2 border-main6' : ''
    ***REMOVED***`***REMOVED***
  >
    스튜디오
  </button>
  <button
    onClick=***REMOVED***() => handleButtonClick('드레스')***REMOVED***
    className=***REMOVED***`bg-main1 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === '드레스' ? 'border-2 border-main2' : ''
    ***REMOVED***`***REMOVED***
  >
    드레스
  </button>
  <button
    onClick=***REMOVED***() => handleButtonClick('메이크업')***REMOVED***
    className=***REMOVED***`bg-main4 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === '메이크업' ? 'border-2 border-main5' : ''
    ***REMOVED***`***REMOVED***
  >
    메이크업
  </button>
    </div>
  )
***REMOVED***

export default CategoryButton;