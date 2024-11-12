import MakeImg from '@/components/SketchPage/MakeImg';
import ***REMOVED*** Environment, OrbitControls, useGLTF ***REMOVED*** from '@react-three/drei';
import ***REMOVED*** Canvas, useThree ***REMOVED*** from '@react-three/fiber';
import ***REMOVED*** Leva, useControls ***REMOVED*** from 'leva';
import React, ***REMOVED*** useEffect, useState ***REMOVED*** from 'react';
import * as THREE from 'three';
import '../App.css';

// ToggleButton의 Props 타입 정의
interface ToggleButtonProps ***REMOVED***
  label: string;
  image: string;
  isVisible: boolean;
  onClick: () => void;
***REMOVED***

// 커스텀 이미지 버튼 컴포넌트
const ToggleButton: React.FC<ToggleButtonProps> = (***REMOVED*** label, image, isVisible, onClick ***REMOVED***) => ***REMOVED***
  return (
    <div className=***REMOVED***`toggle-button $***REMOVED***isVisible ? 'active' : ''***REMOVED***`***REMOVED*** onClick=***REMOVED***onClick***REMOVED***>
      <img src=***REMOVED***image***REMOVED*** alt=***REMOVED***label***REMOVED*** className="toggle-button-image" />
      <div className="toggle-button-label">***REMOVED***label***REMOVED***</div>
    </div>
  );
***REMOVED***;

// PartMeshes의 Props 타입 정의
interface PartMeshesProps ***REMOVED***
  visibility: Record<string, boolean>;
  scaleAdjustments: ***REMOVED*** width?: number; depth?: number ***REMOVED***;
  modelPath: string;
***REMOVED***

// 각 파트별 컴포넌트 (기본 크기를 유지하면서 scale 조절 가능하게 설정)
const PartMeshes: React.FC<PartMeshesProps> = (***REMOVED*** visibility, scaleAdjustments, modelPath ***REMOVED***) => ***REMOVED***
  const ***REMOVED*** scene ***REMOVED*** = useGLTF(modelPath) as any; // useGLTF 타입 문제로 any로 설정
  const [initialScales, setInitialScales] = useState<Record<string, THREE.Vector3>>(***REMOVED******REMOVED***);

  useEffect(() => ***REMOVED***
    const newInitialScales: Record<string, THREE.Vector3> = ***REMOVED*** ...initialScales ***REMOVED***;

    scene.traverse((child: any) => ***REMOVED***
      if (child.isMesh) ***REMOVED***
        child.visible = visibility[child.name];

        // 각 child의 기본 스케일을 저장
        if (!newInitialScales[child.name]) ***REMOVED***
          newInitialScales[child.name] = child.scale.clone(); // 기본 스케일을 복사해 저장
        ***REMOVED***

        // 각 부위에 대한 scale 적용
        if (newInitialScales[child.name]) ***REMOVED***
          const widthScale = scaleAdjustments.width || 1;
          const depthScale = scaleAdjustments.depth || 1;

          // 드레스와 어깨 각각의 축에 맞게 스케일을 설정
          if (modelPath.includes("dress")) ***REMOVED***
            child.scale.set(
              newInitialScales[child.name].x * widthScale, // X축 (넓이) 조정
              newInitialScales[child.name].y * depthScale,  // Y축 (폭) 조정
              newInitialScales[child.name].z                // Z축 고정
            );
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***);

    setInitialScales(newInitialScales); // 초기 스케일 저장
  ***REMOVED***, [scene, visibility, scaleAdjustments]);

  return <primitive object=***REMOVED***scene***REMOVED*** />;
***REMOVED***;

// CameraSettings 컴포넌트
const CameraSettings: React.FC = () => ***REMOVED***
  const ***REMOVED*** camera ***REMOVED*** = useThree();
  useEffect(() => ***REMOVED***
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 1, 0);
    camera.zoom = 1.5;
    camera.updateProjectionMatrix();
  ***REMOVED***, [camera]);

  return null;
***REMOVED***;

// Sketch 컴포넌트
const Sketch: React.FC = () => ***REMOVED***
  const [visibility, setVisibility] = useState<Record<string, boolean>>(***REMOVED***
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
  ***REMOVED***);

  const dressList = ['../assets/dress/dress1.png', '../assets/dress/dress2.png', '../assets/dress/dress3.png', '../assets/dress/dress4.png', '../assets/dress/dress5.png'];
  const topList = ['../assets/top/top1.png', '../assets/top/top2.png', '../assets/top/top3.png', '../assets/top/top4.png', '../assets/top/top5.png'];
  const shoulderList = ['../assets/shoulder/shoulder1.png', '../assets/shoulder/shoulder2.png'];
  const armList = ['../assets/arm/arm1.png', '../assets/arm/arm2.png', '../assets/arm/arm3.png'];

  // Leva 슬라이더로 각 축별 스케일 값을 개별적으로 조정
  const ***REMOVED*** dressWidthScale, dressDepthScale ***REMOVED*** = useControls(***REMOVED***
    dressWidthScale: ***REMOVED***
      value: 0.6,
      min: 0.6,
      max: 1,
      step: 0.1,
      label: "Dress Width Scale"
    ***REMOVED***,
    dressDepthScale: ***REMOVED***
      value: 1,
      min: 1,
      max: 1.5,
      step: 0.1,
      label: "Dress Depth Scale"
    ***REMOVED***
  ***REMOVED***);

  const selectVisibility = (name: string, category: string) => ***REMOVED***
    setVisibility((prev) => ***REMOVED***
      const updatedVisibility = ***REMOVED*** ...prev ***REMOVED***;

      // 선택된 항목의 상태를 토글
      updatedVisibility[name] = !prev[name];

      // 동일 카테고리의 다른 항목은 모두 false로 설정
      Object.keys(updatedVisibility).forEach((key) => ***REMOVED***
        if (key.startsWith(category) && key !== name) ***REMOVED***
          updatedVisibility[key] = false;
        ***REMOVED***
      ***REMOVED***);

      return updatedVisibility;
    ***REMOVED***);
  ***REMOVED***;
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null);
  // const [imgURL, setImgURL] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [blobData, setBlobData] = useState<Blob | null>(null);

  const captureImage = () => ***REMOVED***
    if (canvasElement) ***REMOVED***
      requestAnimationFrame(() => ***REMOVED***
        const dataURL = canvasElement.toDataURL("image/jpeg", 0.8);
        const base64Data = dataURL.split(",")[1];

        // Base64 데이터를 Blob으로 변환
        const byteString = atob(base64Data);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) ***REMOVED***
          uint8Array[i] = byteString.charCodeAt(i);
        ***REMOVED***
        const blob = new Blob([uint8Array], ***REMOVED*** type: "image/jpeg" ***REMOVED***); 
        
        setBlobData(blob); // Blob을 상태로 저장
        setIsOpen(true);
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***;


  return (
    <div className="app-container">
      <Canvas
        onCreated=***REMOVED***(***REMOVED*** gl, scene, camera ***REMOVED***) => ***REMOVED***
          setCanvasElement(gl.domElement); // 캔버스 엘리먼트를 상태에 저장
          gl.render(scene, camera); // 초기 렌더링 강제 실행
        ***REMOVED******REMOVED***
        shadows
        camera=***REMOVED******REMOVED*** fov: 40, position: [0, 1, 5] ***REMOVED******REMOVED***
        className="canvas"
      >
        <hemisphereLight groundColor=***REMOVED***'#eeeeee'***REMOVED*** intensity=***REMOVED***1.0***REMOVED*** />
        <ambientLight intensity=***REMOVED***0.5***REMOVED*** />
        <pointLight position=***REMOVED***[10, 10, 10]***REMOVED*** intensity=***REMOVED***1.2***REMOVED*** />
        <directionalLight position=***REMOVED***[-5, 5, 5]***REMOVED*** intensity=***REMOVED***0.8***REMOVED*** castShadow />
        <spotLight position=***REMOVED***[5, 15, 10]***REMOVED*** angle=***REMOVED***0.3***REMOVED*** penumbra=***REMOVED***1***REMOVED*** intensity=***REMOVED***1.2***REMOVED*** castShadow />

        <PartMeshes
          visibility=***REMOVED***visibility***REMOVED***
          scaleAdjustments=***REMOVED******REMOVED*** width: dressWidthScale, depth: dressDepthScale ***REMOVED******REMOVED***
          modelPath="../assets/dress.glb"
        />
        <PartMeshes
          visibility=***REMOVED***visibility***REMOVED***
          scaleAdjustments=***REMOVED******REMOVED******REMOVED******REMOVED***
          modelPath="../assets/shoulder.glb"
        />
        <PartMeshes
          visibility=***REMOVED***visibility***REMOVED***
          scaleAdjustments=***REMOVED******REMOVED******REMOVED******REMOVED***
          modelPath="../assets/top.glb"
        />
        <PartMeshes
          visibility=***REMOVED***visibility***REMOVED***
          scaleAdjustments=***REMOVED******REMOVED******REMOVED******REMOVED***
          modelPath="../assets/arm.glb"
        />

        <Environment preset="sunset" />
        <CameraSettings />
        <OrbitControls target=***REMOVED***[0, 1, 0]***REMOVED*** enablePan=***REMOVED***false***REMOVED*** />
      </Canvas>

      <div className="toggle-container">

        <div className="toggle-group">
          <h4>Dress</h4>
          ***REMOVED***dressList.map((dress, index) => (
            <ToggleButton
              key=***REMOVED***`dress_$***REMOVED***index + 1***REMOVED***`***REMOVED***
              label=***REMOVED***` $***REMOVED***index + 1***REMOVED***`***REMOVED***
              image=***REMOVED***dress***REMOVED***
              isVisible=***REMOVED***visibility[`dress_$***REMOVED***index + 1***REMOVED***`]***REMOVED***
              onClick=***REMOVED***() => selectVisibility(`dress_$***REMOVED***index + 1***REMOVED***`, 'dress')***REMOVED***
            />
          ))***REMOVED***
        </div>

        <div className="toggle-group">
          <h4>Top</h4>
          ***REMOVED***topList.map((top, index) => (
            <ToggleButton
              key=***REMOVED***`top_$***REMOVED***index + 1***REMOVED***`***REMOVED***
              label=***REMOVED***` $***REMOVED***index + 1***REMOVED***`***REMOVED***
              image=***REMOVED***top***REMOVED***
              isVisible=***REMOVED***visibility[`top_$***REMOVED***index + 1***REMOVED***`]***REMOVED***
              onClick=***REMOVED***() => selectVisibility(`top_$***REMOVED***index + 1***REMOVED***`, 'top')***REMOVED***
            />
          ))***REMOVED***
        </div>

        <div className="toggle-group">
          <h4>Shoulder</h4>
          ***REMOVED***shoulderList.map((shoulder, index) => (
            <ToggleButton
              key=***REMOVED***`shoulder_$***REMOVED***index + 1***REMOVED***`***REMOVED***
              label=***REMOVED***`$***REMOVED***index + 1***REMOVED***`***REMOVED***
              image=***REMOVED***shoulder***REMOVED***
              isVisible=***REMOVED***visibility[`shoulder_$***REMOVED***index + 1***REMOVED***`]***REMOVED***
              onClick=***REMOVED***() => selectVisibility(`shoulder_$***REMOVED***index + 1***REMOVED***`, 'shoulder')***REMOVED***
            />
          ))***REMOVED***
        </div>

        <div className="toggle-group">
          <h4>Arm</h4>
          ***REMOVED***armList.map((arm, index) => (
            <ToggleButton
              key=***REMOVED***`arm_$***REMOVED***index + 1***REMOVED***`***REMOVED***
              label=***REMOVED***` $***REMOVED***index + 1***REMOVED***`***REMOVED***
              image=***REMOVED***arm***REMOVED***
              isVisible=***REMOVED***visibility[`arm_$***REMOVED***index + 1***REMOVED***`]***REMOVED***
              onClick=***REMOVED***() => selectVisibility(`arm_$***REMOVED***index + 1***REMOVED***`, 'arm')***REMOVED***
            />
          ))***REMOVED***
        </div>
      </div>
      <div className="leva-container">
        <Leva collapsed />
      </div>

      <div onClick=***REMOVED***captureImage***REMOVED*** className="plusIconButton">
        <button className='bg-main2 rounded-lg p-2 text-sm'>이미지 만들기</button>
      </div>
      <div className='makeImg-modal'>
        <MakeImg isOpen=***REMOVED***isOpen***REMOVED*** setIsOpen=***REMOVED***setIsOpen***REMOVED*** blobData=***REMOVED***blobData***REMOVED*** />
      </div>
    </div>
  );
***REMOVED***;

export default Sketch;
