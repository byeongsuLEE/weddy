// import ***REMOVED*** aiRecommend ***REMOVED*** from "@/api/recommendApi";
// import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
// import ***REMOVED*** useSetRecoilState ***REMOVED*** from "recoil";

const Prompt = () => ***REMOVED***
  const [placeholder, setPlaceholder] = useState("");
  const text = "모던한 분위기의 500만원대 스튜디오 추천해줘";
  const [ inputValue, setInputValue] = useState("");
  // const setRecommendList = useSetRecoilState(recommendState);

  const navigate = useNavigate();

  const toPlanner = async () => ***REMOVED***
    console.log(inputValue);
    // const recommendList = await aiRecommend(inputValue);
    // setRecommendList(recommendList);
    navigate("/planner");
  ***REMOVED***

  useEffect(() => ***REMOVED***
    let index = 0;
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => ***REMOVED***
      typingInterval = setInterval(() => ***REMOVED***
        setPlaceholder(text.slice(0, index + 1));
        index++;

        if (index === text.length) ***REMOVED***
          clearInterval(typingInterval);
          setTimeout(() => ***REMOVED***
            index = 0;
            setPlaceholder("");
            startTyping();
          ***REMOVED***, 1000);
        ***REMOVED***
      ***REMOVED***, 150);
    ***REMOVED***;

    startTyping();

    return () => clearInterval(typingInterval);
  ***REMOVED***, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => ***REMOVED***
    setInputValue(e.target.value);
  ***REMOVED***;

  return (
    <div className="mx-5 flex flex-col items-center mt-[220px]">
      <img src="/gifs/robot.gif" alt="" />
      <h1 className="text-center">AI기반의
        <span className="text-main2 ml-1 font-bold">
          WEDDY 플래너
        </span>가 <br /> 당신에게 맞는 상품을 추천해 드려요! </h1>
      <input
        placeholder=***REMOVED***placeholder***REMOVED***
        autoFocus
        className="w-[380px] h-[50px] p-5 rounded-3xl mt-10"
        type="text"
        onChange=***REMOVED***handleChange***REMOVED***
      />
      <button onClick=***REMOVED***toPlanner***REMOVED*** className="bg-main2 text-white w-[120px] h-[40px] rounded-xl font-bold mt-10">추천받기</button>
    </div>
  )
***REMOVED***

export default Prompt;