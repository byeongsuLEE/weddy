import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface RecommendBoxProps {
  src: string;
  name: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
}

const RecommendBox = ({ src, name, price, isSelected, onSelect }: RecommendBoxProps) => {
  return (
    <div className="flex flex-col">
      <Link to='/board/detail'>
        <img className="w-[150px] h-[150px] rounded-xl" src={src} alt="image" />
      </Link>
      <div className="flex items-center justify-between">
        <Checkbox
          checked={isSelected}
          onCheckedChange={onSelect}
        />
        <Link to='/board/detail'>
          <div className="flex flex-col text-end">
            <span className="text-gray-500 mt-2">{name}</span>
            <span>{Number(price).toLocaleString()}원</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecommendBox;
