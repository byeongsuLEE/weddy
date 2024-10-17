import CalenderIcon from "../icons/CalenderIcon";
import FileIcon from "../icons/FileIcon";
import HomeSelectIcon from "../icons/HomeSelectIcon";
import MyIcon from "../icons/MyIcon";
import HomeIcon from "../icons/homeIcon";

const Footer = () => ***REMOVED***
  return (
    <footer className="flex justify-between">
      ***REMOVED***location.pathname === "/" ? (
        <HomeSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ) : (
        <HomeIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      )***REMOVED***
      <CalenderIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />

      ***REMOVED***/* <CalenderSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** /> */***REMOVED***
      <FileIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ***REMOVED***/* <FileSelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** /> */***REMOVED***
      <MyIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** />
      ***REMOVED***/* <MySelectIcon w=***REMOVED***25***REMOVED*** h=***REMOVED***25***REMOVED*** /> */***REMOVED***
    </footer>
  );
***REMOVED***;

export default Footer;