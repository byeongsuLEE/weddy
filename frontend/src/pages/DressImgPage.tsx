import { useLocation } from "react-router-dom";
import { capturedImageState } from "@/store/imageState";
import { useRecoilState } from "recoil";

const DressImg = () => {
  const [capturedImage] = useRecoilState(capturedImageState);
  const location = useLocation();
  const { studioName, dressName, imgSrc } = location.state || {};

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {(imgSrc || capturedImage) && (
        <>
          <img
            src={imgSrc ? imgSrc : (capturedImage ? URL.createObjectURL(capturedImage) : "")}
            alt="Captured"
            style={{ width: '100%' }}
          />
          <div
            style={{
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
            }}
          >
            {studioName || '스튜디오명'} _ {dressName || '드레스명'}
          </div>
        </>
      )}
    </div>
  );
}

export default DressImg;
