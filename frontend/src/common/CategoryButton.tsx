import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

interface categoryProps ***REMOVED***
  changeCategory: (category: string) => void;
***REMOVED***;

const CategoryButton=(***REMOVED*** changeCategory ***REMOVED***: categoryProps)=>***REMOVED***
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => ***REMOVED***
    const category = ***REMOVED***
      스튜디오: "STUDIO",
      드레스: "DRESS",
      메이크업: "MAKEUP",
    ***REMOVED*** [buttonName as "스튜디오" | "드레스" | "메이크업"];

    setSelectedButton(category);
  ***REMOVED***;

  useEffect(() => ***REMOVED***
    if (selectedButton)***REMOVED***
      changeCategory(selectedButton);
    ***REMOVED***;
  ***REMOVED***, [selectedButton]);

  return (
    <>
    <button
    onClick=***REMOVED***() => handleButtonClick('스튜디오')***REMOVED***
    className=***REMOVED***`bg-main3 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === 'STUDIO' ? 'border-2 border-main6' : ''
    ***REMOVED***`***REMOVED***
  >
    스튜디오
  </button>
  <button
    onClick=***REMOVED***() => handleButtonClick('드레스')***REMOVED***
    className=***REMOVED***`bg-main1 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === 'DRESS' ? 'border-2 border-main2' : ''
    ***REMOVED***`***REMOVED***
  >
    드레스
  </button>
  <button
    onClick=***REMOVED***() => handleButtonClick('메이크업')***REMOVED***
    className=***REMOVED***`bg-main4 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 $***REMOVED***
      selectedButton === 'MAKEUP' ? 'border-2 border-main5' : ''
    ***REMOVED***`***REMOVED***
  >
    메이크업
  </button>
  </>
  )
***REMOVED***

export default CategoryButton;