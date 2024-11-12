import ***REMOVED*** addProductToCart ***REMOVED*** from "@/api/cartApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import RecommendBox from "@/components/PlannerPage/RecommendBox";
import ***REMOVED*** RadioGroup ***REMOVED*** from "@/components/ui/radio-group";
import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate, useParams ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useRecoilValue ***REMOVED*** from "recoil";

const PlannerList = () => ***REMOVED***
  const navigate = useNavigate();
  const ***REMOVED*** category ***REMOVED*** = useParams();
  const [categoryList, setCategoryList] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const recommendList = useRecoilValue(recommendState);

  useEffect(() => ***REMOVED***
    setCategoryList(
      recommendList.filter((item: Product) => item.type === category)
    );
  ***REMOVED***, [recommendList, category]);

  const handleCheckboxChange = (index: number) => ***REMOVED***
    setSelectedIndex(index === selectedIndex ? null : index);
    console.log(categoryList[index]);
  ***REMOVED***;

  const renderCategory = ***REMOVED***
    STUDIO: "스튜디오",
    DRESS: "드레스",
    MAKEUP: "메이크업",
  ***REMOVED***[category ?? ""];

  const addToCart = async () => ***REMOVED***
    if (selectedIndex !== null) ***REMOVED***
      await addProductToCart(categoryList[selectedIndex].id);
      navigate("/planner");
    ***REMOVED***
  ***REMOVED***;

  return (
    <RadioGroup>
      <h1 className="text-center mt-10">***REMOVED***renderCategory***REMOVED***</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-5 mb-5">
        ***REMOVED***categoryList.map((item: Product, index) => (
          <div key=***REMOVED***index***REMOVED***>
            <RecommendBox
              isSelected=***REMOVED***selectedIndex === index***REMOVED***
              onSelect=***REMOVED***() => handleCheckboxChange(index)***REMOVED***
              src=***REMOVED***item.images[0].imageUrl***REMOVED***
              name=***REMOVED***item.name***REMOVED***
              price=***REMOVED***item.price***REMOVED***
            />
          </div>
        ))***REMOVED***
      </div>
      <div onClick=***REMOVED***addToCart***REMOVED*** className="flex justify-end mr-10 mb-20">
        <TodoButton title="상품 담기" />
      </div>
    </RadioGroup>
  );
***REMOVED***;

export default PlannerList;
