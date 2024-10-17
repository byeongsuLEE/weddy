import ***REMOVED*** useLocation ***REMOVED*** from "react-router-dom"; // location을 가져오기 위해 필요
import BackIcon from "../icons/BackIcon";

const Navbar = () => ***REMOVED***
  const location = useLocation();

  return (
    <nav>
      ***REMOVED***location.pathname !== "/" && (
        <div className="back-icon">
          <BackIcon />
        </div>
      )***REMOVED***
      <div className="textAlign">스드메</div>
      <div className="textAlign">WEDDY 플래너</div>
    </nav>
  );
***REMOVED***;

export default Navbar;
