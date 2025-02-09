import { Product } from "@/api/product.type";
import { AccordionDetails } from "@mui/material";
import { Link } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";
import { deleteFromCart } from "@/api/cartApi";

interface CartBoxProps {
  item: Product;
  isSelected: boolean;
  onProductSelect: (product: Product | null) => void;
  onRemove: () => void;
}

const CartBox = ({ item, isSelected, onProductSelect, onRemove }: CartBoxProps) => {
  const handleCheckboxChange = () => {
    onProductSelect(isSelected ? null : item);
  };

  const deleteItem = async (productId: string) => {
    await deleteFromCart(productId);
    onRemove();
  };

  return (
    <AccordionDetails sx={{ border: "none" }}>
      <div className="flex items-center space-x-4">
        <Checkbox checked={isSelected} onCheckedChange={handleCheckboxChange} />
        <Link
          to={`/board/detail/${item.id}`}
          className="flex flex-1 justify-between items-center space-x-4"
        >
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-lg text-main2">{item.vendorName}</span>
            <span>{item.name}</span>
            <span className="font-bold">{Number(item.price).toLocaleString()}원</span>
          </div>
        </Link>
        <button className="ml-auto mr-3 rounded-full w-[35px] h-[35px] bg-gray-100" onClick={() => deleteItem(item.id)}>
          삭제
        </button>
      </div>
    </AccordionDetails>
  );
};

export default CartBox;
