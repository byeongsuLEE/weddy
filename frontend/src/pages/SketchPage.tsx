import AlertBox from "@/common/AlertBox";
import MakeImg from '@/components/SketchPage/MakeImg';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import '../App.css';


// ToggleButton의 Props 타입 정의
interface ToggleButtonProps {
  label: string;
  image: string;
  isVisible: boolean;
  onClick: () => void;
}

// 커스텀 이미지 버튼 컴포넌트
const ToggleButton: React.FC<ToggleButtonProps> = ({ label, image, isVisible, onClick }) => {
  return (
    <div className={`toggle-button ${isVisible ? 'active' : ''}`} onClick={onClick}>
      <img src={image} alt={label} className="toggle-button-image" />
      <div className="toggle-button-label">{label}</div>
    </div>
  );
};

// PartMeshes의 Props 타입 정의
interface PartMeshesProps {
  visibility: Record<string, boolean>;
  scaleAdjustments: { width?: number; depth?: number };
  modelPath: string;
}



// 각 파트별 컴포넌트 (기본 크기를 유지하면서 scale 조절 가능하게 설정)
const PartMeshes: React.FC<PartMeshesProps> = ({ visibility, scaleAdjustments, modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const [initialScales, setInitialScales] = useState<Record<string, THREE.Vector3>>({});

  useEffect(() => {
    const newInitialScales: Record<string, THREE.Vector3> = { ...initialScales };

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.visible = visibility[mesh.name];

        if (!newInitialScales[mesh.name]) {
          newInitialScales[mesh.name] = mesh.scale.clone();
        }

        if (newInitialScales[mesh.name]) {
          const widthScale = scaleAdjustments.width || 1;
          const depthScale = scaleAdjustments.depth || 1;

          if (modelPath.includes("dress")) {
            mesh.scale.set(
              newInitialScales[mesh.name].x * widthScale,
              newInitialScales[mesh.name].y * depthScale,
              newInitialScales[mesh.name].z
            );
          }
        }
      }
    });

    setInitialScales(newInitialScales);
  }, [scene, visibility, scaleAdjustments]);

  return <primitive object={scene} />;
};

// CameraSettings 컴포넌트
const CameraSettings: React.FC = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 1, 0);
    camera.zoom = 1.2;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

// Sketch 컴포넌트
const Sketch: React.FC = () => {
  const [visibility, setVisibility] = useState<Record<string, boolean>>({
    dress_1: false,
    dress_2: false,
    dress_3: false,
    dress_4: false,
    dress_5: false,
    top_1: false,
    top_2: false,
    top_3: false,
    top_4: false,
    top_5: false,
    shoulder_1: false,
    shoulder_2: false,
    arm_1: false,
    arm_2: false,
    arm_3: false,
  });

  const dressList = ['../assets/dress/dress1.png', '../assets/dress/dress2.png', '../assets/dress/dress3.png', '../assets/dress/dress4.png', '../assets/dress/dress5.png'];
  const topList = ['../assets/top/top1.png', '../assets/top/top2.png', '../assets/top/top3.png', '../assets/top/top4.png', '../assets/top/top5.png'];
  const shoulderList = ['../assets/shoulder/shoulder1.png', '../assets/shoulder/shoulder2.png'];
  const armList = ['../assets/arm/arm1.png', '../assets/arm/arm2.png', '../assets/arm/arm3.png'];

  // Leva 슬라이더로 각 축별 스케일 값을 개별적으로 조정
  const { dressWidthScale, dressDepthScale } = useControls({
    dressWidthScale: {
      value: 0.6,
      min: 0.6,
      max: 1,
      step: 0.1,
      label: "Dress Width Scale"
    },
    dressDepthScale: {
      value: 1,
      min: 1,
      max: 1.5,
      step: 0.1,
      label: "Dress Depth Scale"
    }
  });

  const selectVisibility = (name: string, category: string) => {
    setVisibility((prev) => {
      const updatedVisibility = { ...prev };

      // 선택된 항목의 상태를 토글
      updatedVisibility[name] = !prev[name];

      // 동일 카테고리의 다른 항목은 모두 false로 설정
      Object.keys(updatedVisibility).forEach((key) => {
        if (key.startsWith(category) && key !== name) {
          updatedVisibility[key] = false;
        }
      });

      return updatedVisibility;
    });
  };
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null);
  // const [imgURL, setImgURL] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [blobData, setBlobData] = useState<Blob | null>(null);

  const captureImage = () => {
    if (canvasElement) {
      requestAnimationFrame(() => {
        const dataURL = canvasElement.toDataURL("image/png"); // PNG로 설정
        const base64Data = dataURL.split(",")[1];

        // Base64 데이터를 Blob으로 변환
        const byteString = atob(base64Data);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([uint8Array], { type: "image/png" }); // Blob 타입을 PNG로 설정

        setBlobData(blob); // Blob을 상태로 저장
        setIsOpen(true);
      });
    }
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };


  return (
    <div className="app-container">
      {showAlert && <AlertBox title="3D 스케치" description="스케치 저장 완료!" />}


      <Canvas
        onCreated={({ gl, scene, camera }) => {
          setCanvasElement(gl.domElement); // 캔버스 엘리먼트를 상태에 저장
          gl.render(scene, camera); // 초기 렌더링 강제 실행
        }}
        shadows
        camera={{ fov: 40, position: [0, 1, 5] }}
        className="canvas"
      >
        <hemisphereLight groundColor={'#eeeeee'} intensity={1.0} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} castShadow />
        <spotLight position={[5, 15, 10]} angle={0.3} penumbra={1} intensity={1.2} castShadow />

        <PartMeshes
          visibility={visibility}
          scaleAdjustments={{ width: dressWidthScale, depth: dressDepthScale }}
          modelPath="../assets/dress.glb"
        />
        <PartMeshes
          visibility={visibility}
          scaleAdjustments={{}}
          modelPath="../assets/shoulder.glb"
        />
        <PartMeshes
          visibility={visibility}
          scaleAdjustments={{}}
          modelPath="../assets/top.glb"
        />
        <PartMeshes
          visibility={visibility}
          scaleAdjustments={{}}
          modelPath="../assets/arm.glb"
        />

        <Environment preset="sunset" />
        <CameraSettings />
        <OrbitControls target={[0, 1, 0]} enablePan={false} />
      </Canvas>

      <div className="toggle-container">

        <div className="toggle-group">
          <h4>Dress</h4>
          {dressList.map((dress, index) => (
            <ToggleButton
              key={`dress_${index + 1}`}
              label={` ${index + 1}`}
              image={dress}
              isVisible={visibility[`dress_${index + 1}`]}
              onClick={() => selectVisibility(`dress_${index + 1}`, 'dress')}
            />
          ))}
        </div>

        <div className="toggle-group">
          <h4>Top</h4>
          {topList.map((top, index) => (
            <ToggleButton
              key={`top_${index + 1}`}
              label={` ${index + 1}`}
              image={top}
              isVisible={visibility[`top_${index + 1}`]}
              onClick={() => selectVisibility(`top_${index + 1}`, 'top')}
            />
          ))}
        </div>

        <div className="toggle-group">
          <h4>Shoulder</h4>
          {shoulderList.map((shoulder, index) => (
            <ToggleButton
              key={`shoulder_${index + 1}`}
              label={`${index + 1}`}
              image={shoulder}
              isVisible={visibility[`shoulder_${index + 1}`]}
              onClick={() => selectVisibility(`shoulder_${index + 1}`, 'shoulder')}
            />
          ))}
        </div>

        <div className="toggle-group">
          <h4>Arm</h4>
          {armList.map((arm, index) => (
            <ToggleButton
              key={`arm_${index + 1}`}
              label={` ${index + 1}`}
              image={arm}
              isVisible={visibility[`arm_${index + 1}`]}
              onClick={() => selectVisibility(`arm_${index + 1}`, 'arm')}
            />
          ))}
        </div>
      </div>
      <div className="leva-container">
        <Leva collapsed />
      </div>

      <div onClick={captureImage} className="plusIconButton">
        <button className='bg-main2 rounded-lg p-2 text-sm'>이미지 만들기</button>
      </div>
      <div className='makeImg-modal'>
        <MakeImg isOpen={isOpen} setIsOpen={setIsOpen} blobData={blobData} onSave={handleSave}/>
      </div>
    </div>
  );
};

export default Sketch;
