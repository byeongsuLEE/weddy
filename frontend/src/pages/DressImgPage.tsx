import ***REMOVED*** useLocation ***REMOVED*** from "react-router-dom";
import ***REMOVED*** capturedImageState ***REMOVED*** from "@/store/imageState";
import ***REMOVED*** useRecoilState ***REMOVED*** from "recoil";

const DressImg = () => ***REMOVED***
  const [capturedImage] = useRecoilState(capturedImageState);
  const location = useLocation();
  const ***REMOVED*** studioName, dressName, imgSrc ***REMOVED*** = location.state || ***REMOVED******REMOVED***;

  return (
    <div style=***REMOVED******REMOVED*** position: 'relative', display: 'inline-block' ***REMOVED******REMOVED***>
      ***REMOVED***(imgSrc || capturedImage) && (
        <>
          <img
            src=***REMOVED***imgSrc ? imgSrc : (capturedImage ? URL.createObjectURL(capturedImage) : "")***REMOVED***
            alt="Captured"
            style=***REMOVED******REMOVED*** width: '100%' ***REMOVED******REMOVED***
          />
          <div
            style=***REMOVED******REMOVED***
              position: 'absolute',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: "black",
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100%',
            ***REMOVED******REMOVED***
          >
            ***REMOVED***studioName || '스튜디오명'***REMOVED*** _ ***REMOVED***dressName || '드레스명'***REMOVED***
          </div>
        </>
      )***REMOVED***
    </div>
  );
***REMOVED***

export default DressImg;
