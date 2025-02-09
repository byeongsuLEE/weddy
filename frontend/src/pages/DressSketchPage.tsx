import { Dress } from "@/api/dress.type";
import { getDressList } from "@/api/dressApi";
import TodoButton from "@/common/TodoButton";
import SketchBox from "@/components/DressSketchPage/Sketchbox";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DressSketch = () => {
  const [dressList, setDressList] = useState<Dress[]>([]);

  useEffect(() => {
    getDressList()
      .then((data: Dress[]) => {
        console.log("Fetched Data:", data);
        setDressList(data || []); // 데이터 없을 경우 빈 배열 설정
      })
      .catch((error) => console.error("Error fetching dress list:", error));
  }, []);

  return (
    <div className="m-5 flex flex-col items-center">
      <div className="mt-5 mb-7">
        <Link to="/sketch">
          <TodoButton title="스케치 하기" />
        </Link>
      </div>
      {dressList && dressList.length > 0 ? (
        dressList.map((sketch, index) => (
          <SketchBox
            key={index}
            imgSrc={sketch.image}
            studioName={sketch.studio}
            dressName={sketch.dressName}
          />
        ))
      ) : (
        <p>제작한 드레스 이미지가 없습니다.</p>
      )}
    </div>
  );
};

export default DressSketch;
