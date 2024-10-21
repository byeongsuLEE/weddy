import ***REMOVED*** Link, useLocation ***REMOVED*** from "react-router-dom"; // location을 가져오기 위해 필요
import BackIcon from "../icons/BackIcon";

const Navbar = () => ***REMOVED***
  const location = useLocation();
  // const navigate = useNavigate();

  // const navigateBack = () => ***REMOVED***
  //   navigate(-1);
  // ***REMOVED***;

  return (
    <nav>
      ***REMOVED***location.pathname !== "/" && (
        <div className="backIcon">
          <Link to='/'>
            <BackIcon />
          </Link>
        </div>
      )***REMOVED***
      ***REMOVED***(location.pathname === "/" || location.pathname === "/board" || location.pathname === "/planner") ? (
      <>
      <Link to='/board'>
        <div className="textAlign">스드메</div>
      </Link>
      <Link to='planner'>
        <div className="textAlign">WEDDY 플래너</div>
      </Link>
        </>
        ):(
          <div></div>
        )***REMOVED***
    </nav>
  );
***REMOVED***;

export default Navbar;
