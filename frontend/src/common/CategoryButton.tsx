import { useEffect, useState } from "react";

interface categoryProps {
  changeCategory: (category: string) => void;
};

const CategoryButton=({ changeCategory }: categoryProps)=>{
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    const category = {
      스튜디오: "STUDIO",
      드레스: "DRESS",
      메이크업: "MAKEUP",
    } [buttonName as "스튜디오" | "드레스" | "메이크업"];

    setSelectedButton(category);
  };

  useEffect(() => {
    if (selectedButton){
      changeCategory(selectedButton);
    };
  }, [selectedButton]);

  return (
    <>
    <button
    onClick={() => handleButtonClick('스튜디오')}
    className={`bg-main3 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 ${
      selectedButton === 'STUDIO' ? 'border-2 border-main6' : ''
    }`}
  >
    스튜디오
  </button>
  <button
    onClick={() => handleButtonClick('드레스')}
    className={`bg-main1 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 ${
      selectedButton === 'DRESS' ? 'border-2 border-main2' : ''
    }`}
  >
    드레스
  </button>
  <button
    onClick={() => handleButtonClick('메이크업')}
    className={`bg-main4 w-[90px] h-[30px] text-black flex items-center justify-center rounded-2xl p-1 m-1 ${
      selectedButton === 'MAKEUP' ? 'border-2 border-main5' : ''
    }`}
  >
    메이크업
  </button>
  </>
  )
}

export default CategoryButton;