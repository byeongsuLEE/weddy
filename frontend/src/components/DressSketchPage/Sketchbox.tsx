import GotoIcon from "@/icons/Goto";
import { Link } from "react-router-dom";

interface SketchBoxProps {
  studioName: string;
  dressName: string;
  imgSrc?: string;
}

const SketchBox = ({ studioName, dressName, imgSrc }: SketchBoxProps) => {
  return (
    <>
      <div className="bg-white h-[70px] rounded-lg w-[350px] my-3 p-5 flex justify-between items-center">
        <span>{studioName} _ {dressName}</span>
        <Link 
          to={{
            pathname: "/dress/img",
          }}
          state={{ imgSrc, studioName, dressName }}
        >
          <GotoIcon />
        </Link>
      </div>
    </>
  );
};

export default SketchBox;
