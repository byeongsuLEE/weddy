import ***REMOVED*** capturedImageState ***REMOVED*** from "@/store/imageState";
import ***REMOVED*** useRecoilState ***REMOVED*** from "recoil";

const Test = () => ***REMOVED***
  const [capturedImage] = useRecoilState(capturedImageState);
  console.log(capturedImage);
  return (
    <div style=***REMOVED******REMOVED*** position: 'relative', display: 'inline-block' ***REMOVED******REMOVED***>
      ***REMOVED***capturedImage && (
        <>
          <img src=***REMOVED***URL.createObjectURL(capturedImage)***REMOVED*** alt="Captured" style=***REMOVED******REMOVED*** width: '100%' ***REMOVED******REMOVED*** />
          <div
            style=***REMOVED******REMOVED***
              position: 'absolute',
              top: '10%',
              left: '10%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: 'bold'
            ***REMOVED******REMOVED***
          >
            스튜디오명
          </div>
          <div
            style=***REMOVED******REMOVED***
              position: 'absolute',
              top: '20%',
              left: '10%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: 'bold'
            ***REMOVED******REMOVED***
          >
            드레스명
          </div>
        </>
      )***REMOVED***
    </div>
  );
***REMOVED***

export default Test;
