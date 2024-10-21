import ***REMOVED*** Link, useLocation, useNavigate ***REMOVED*** from "react-router-dom"; // location을 가져오기 위해 필요
import BackIcon from "../icons/BackIcon";
import CartIcon from "../icons/CartIcon";

const Navbar = () => ***REMOVED***
  const location = useLocation().pathname.split('/')[1];
  const locationDetail = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  const navigateBack = () => ***REMOVED***
    navigate(-1);
  ***REMOVED***;
  const goCart = () => ***REMOVED***
    navigate('/cart');
  ***REMOVED***

  return (
    <nav>
      ***REMOVED***location !== "" && (
        <div className="backIcon" onClick=***REMOVED***navigateBack***REMOVED***>
          <BackIcon />
        </div>
      )***REMOVED***
      ***REMOVED***(location === "" || location === "board" || location === "planner" ) && (locationDetail===undefined) && (
        <>
          <Link to='/board'>
            <div className="textAlign">스드메</div>
          </Link>
          <Link to='planner'>
            <div className="textAlign">WEDDY 플래너</div>
          </Link>
        </>
      )***REMOVED***
      ***REMOVED***location === "contractlist" && (
        <div>나의 계약</div>
      )***REMOVED***
      ***REMOVED***location === "schedule" && (
        <div>일정 관리</div>
      )***REMOVED***
      ***REMOVED***location === "mypage" && (
        <div>마이페이지</div>
      )***REMOVED***
      ***REMOVED***location === "cart" && (
        <div>장바구니</div>
      )***REMOVED***

      ***REMOVED***location === "board" && locationDetail==="detail" && (
        <div>제품 상세</div>
      )***REMOVED***

      ***REMOVED***location != "contract" && (
        <div className="cartIcon" onClick=***REMOVED***goCart***REMOVED***>
          <CartIcon />
        </div>
      )***REMOVED***
    </nav>
  );
***REMOVED***;

export default Navbar;
