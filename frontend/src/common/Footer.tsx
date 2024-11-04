import DressIcon from "@/icons/DressIcon";
import DressSelectIcon from "@/icons/DressSelectIcon";
import ***REMOVED*** Link, useLocation ***REMOVED*** from "react-router-dom";
import CalenderIcon from "../icons/CalenderIcon";
import CalenderSelectIcon from "../icons/CalenderSelectIcon";
import FileIcon from "../icons/FileIcon";
import FileSelectIcon from "../icons/FileSelectIcon";
import HomeIcon from "../icons/HomeIcon";
import HomeSelectIcon from "../icons/HomeSelectIcon";
import MyIcon from "../icons/MyIcon";
import MySelectIcon from "../icons/MySelectIcon";


const Footer = () => ***REMOVED***
  const location = useLocation().pathname.split('/')[1];

  return (
    <footer className="flex justify-between">
      ***REMOVED***location === "" ? (
        <HomeSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ) : (

        <Link to='/'>
          <HomeIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
        </Link>

      )***REMOVED***

      ***REMOVED***location === "schedule" ? (
        <CalenderSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ) : (
        <Link to='/schedule'>
          <CalenderIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
        </Link>

      )***REMOVED***

      ***REMOVED***location === "sketch" ? (
        <DressSelectIcon />
      ) : (
        <Link to='/sketch'>
          <DressIcon/>
        </Link>
      )***REMOVED***

      ***REMOVED***location === "contract" ? (
        <FileSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ) : (
        <Link to='/contract/list'>
          <FileIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
        </Link>
      )***REMOVED***


      ***REMOVED***location === "mypage" ? (
        <MySelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ) : (
        <Link to='/mypage'>
          <MyIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
        </Link>
      )***REMOVED***

    </footer>
  );
***REMOVED***;

export default Footer;