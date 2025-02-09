
import { Product } from "@/api/product.type";
import Separate from "../../common/Separate";

interface BoardContentProp {
  product?: Product | undefined;
}

const BoardContent = ( { product }: BoardContentProp) => {
  const price = product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return (
    <div className="mx-5 mb-10">
      <div className="flex flex-col my-5">
        <span className="font-bold mt-2">{product?.name}</span>
        <span className="text-gray-500 text-sm">{product?.vendorName}</span>
      </div>
      <Separate />
      <div className="flex flex-col mt-5">
      <span>{product?.address}</span>
      <span className="font-bold text-xl mt-2">{price} 원</span>
      </div>
    </div>
  );
};

export default BoardContent;
