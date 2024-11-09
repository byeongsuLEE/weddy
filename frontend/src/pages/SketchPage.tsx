import ***REMOVED*** Environment, OrbitControls, useGLTF ***REMOVED*** from '@react-three/drei';
import ***REMOVED*** Canvas, useThree ***REMOVED*** from '@react-three/fiber';
import html2canvas from 'html2canvas';
import ***REMOVED*** Leva, useControls ***REMOVED*** from 'leva';
import ***REMOVED*** useEffect, useRef ***REMOVED*** from 'react';
import * as THREE from 'three';

function WeddingDress() ***REMOVED***
  const ***REMOVED*** scene ***REMOVED*** = useGLTF('../assets/dress_merge.glb');

  // 상의에 대한 Leva 컨트롤 정의
  const upperControls = useControls('상의', ***REMOVED***
    metalness: ***REMOVED*** value: 0.05, min: 0, max: 1, step: 0.01, label: '메탈니스' ***REMOVED***,
    roughness: ***REMOVED*** value: 0.3, min: 0, max: 1, step: 0.01, label: '거칠기' ***REMOVED***,
    emissiveIntensity: ***REMOVED*** value: 0.4, min: 0, max: 2, step: 0.1, label: '밝기' ***REMOVED***,
    sleeveLength: ***REMOVED*** value: 1, min: 0.5, max: 1.5, step: 0.01, label: '소매 길이' ***REMOVED***,
    neckHeight: ***REMOVED*** value: 1, min: 0.8, max: 3, step: 0.01, label: '목 높이' ***REMOVED***,
    neckWidth: ***REMOVED*** value: 1, min: 0.8, max: 1.5, step: 0.01, label: '목 넓이' ***REMOVED***,
    showArms: ***REMOVED*** value: false, label: 'Arms Visible' ***REMOVED***,
    showLaceShirt: ***REMOVED*** value: false, label: 'Lace Shirt Visible' ***REMOVED***,
    showTop: ***REMOVED*** value: false, label: 'Top Visible' ***REMOVED***,
    showShoulder2: ***REMOVED*** value: false, label: 'Shoulder2 Visible' ***REMOVED***
  ***REMOVED***);

  // 하의에 대한 Leva 컨트롤 정의
  const lowerControls = useControls('하의', ***REMOVED***
    dressLength: ***REMOVED*** value: 0.5, min: 0.5, max: 1, step: 0.01, label: '드레스 넓이' ***REMOVED***,
    dressWidth: ***REMOVED*** value: 1, min: 0.5, max: 2, step: 0.01, label: '드레스 폭' ***REMOVED***,
    showSkirt: ***REMOVED*** value: false, label: 'Skirt Visible' ***REMOVED***,
    showSkirt2: ***REMOVED*** value: false, label: 'Skirt2 Visible' ***REMOVED***,
    showDress3: ***REMOVED*** value: false, label: 'Dress3 Visible' ***REMOVED***,
    showTop3: ***REMOVED*** value: false, label: 'Top3 Visible' ***REMOVED***
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    scene.traverse((child) => ***REMOVED***
      if ((child as THREE.Mesh).isMesh) ***REMOVED***
        const mesh = child as THREE.Mesh;
        if (mesh.material) ***REMOVED***
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.metalness = upperControls.metalness;
          material.roughness = upperControls.roughness;
          material.emissive = new THREE.Color(0x888888);
          material.emissiveIntensity = upperControls.emissiveIntensity;
          material.side = THREE.DoubleSide;
        ***REMOVED***

        // 상의 속성 조정
        if (['left_arm', 'right_arm'].includes(mesh.name)) ***REMOVED***
          mesh.visible = upperControls.showArms;
          mesh.scale.x = upperControls.sleeveLength;
        ***REMOVED***
        if (mesh.name === 'lace_shirt') ***REMOVED***
          mesh.visible = upperControls.showLaceShirt;
          mesh.scale.y = upperControls.neckHeight;
          mesh.scale.z = upperControls.neckWidth;
        ***REMOVED***
        if (mesh.name === 'top2') mesh.visible = upperControls.showTop;
        if (mesh.name === 'shorder_2') mesh.visible = upperControls.showShoulder2;

        // 하의 속성 조정
        if (mesh.name === 'skirt') ***REMOVED***
          mesh.visible = lowerControls.showSkirt;
          mesh.scale.z = lowerControls.dressWidth;
          mesh.scale.x = lowerControls.dressLength;
        ***REMOVED***
        if (mesh.name === 'skirt2') ***REMOVED***
          mesh.visible = lowerControls.showSkirt2;
          mesh.scale.z = lowerControls.dressWidth;
          mesh.scale.x = lowerControls.dressLength;
        ***REMOVED***
        if (mesh.name === 'dress_3') mesh.visible = lowerControls.showDress3;
        if (mesh.name === 'top_3') mesh.visible = lowerControls.showTop3;
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***, [scene, upperControls, lowerControls]);

  return <primitive object=***REMOVED***scene***REMOVED*** />;
***REMOVED***

function CameraSettings() ***REMOVED***
  const ***REMOVED*** camera ***REMOVED*** = useThree();
  useEffect(() => ***REMOVED***
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 1, 0);
    camera.zoom = 1.5;
    camera.updateProjectionMatrix();
  ***REMOVED***, [camera]);

  return null;
***REMOVED***

const Sketch: React.FC = () => ***REMOVED***
  const captureRef = useRef<HTMLDivElement>(null);

  // 캡처 함수 정의
  const handleCapture = () => ***REMOVED***
    if (captureRef.current) ***REMOVED***
      html2canvas(captureRef.current).then((canvas) => ***REMOVED***
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'wedding_dress_capture.png';
        link.click();
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***;

  return (
    <>
      <button
        className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded px-4 py-2 shadow-lg"
        style=***REMOVED******REMOVED*** zIndex: 100 ***REMOVED******REMOVED***
        onClick=***REMOVED***handleCapture***REMOVED***
      >
        캡처하기
      </button>
      <div
        ref=***REMOVED***captureRef***REMOVED*** // 캡처할 영역
        style=***REMOVED******REMOVED***
          width: 414,
          height: 800,
          display: 'flex',
          position: 'relative',
          backgroundImage: 'url(../assets/wedding-back2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        ***REMOVED******REMOVED***
      >
        <Canvas shadows camera=***REMOVED******REMOVED*** fov: 40, position: [0, 1, 5] ***REMOVED******REMOVED***>
          <hemisphereLight groundColor=***REMOVED***'#eeeeee'***REMOVED*** intensity=***REMOVED***1.0***REMOVED*** />
          <ambientLight intensity=***REMOVED***0.5***REMOVED*** />
          <pointLight position=***REMOVED***[10, 10, 10]***REMOVED*** intensity=***REMOVED***1.2***REMOVED*** />
          <directionalLight position=***REMOVED***[-5, 5, 5]***REMOVED*** intensity=***REMOVED***0.8***REMOVED*** castShadow />
          <spotLight position=***REMOVED***[5, 15, 10]***REMOVED*** angle=***REMOVED***0.3***REMOVED*** penumbra=***REMOVED***1***REMOVED*** intensity=***REMOVED***1.2***REMOVED*** castShadow />

          <WeddingDress />

          <Environment preset="sunset" />
          <CameraSettings />
          <OrbitControls target=***REMOVED***[0, 1, 0]***REMOVED*** enablePan=***REMOVED***false***REMOVED*** />
        </Canvas>

        <Leva collapsed=***REMOVED***true***REMOVED*** oneLineLabels=***REMOVED***true***REMOVED*** />


      </div>
    </>
  );
***REMOVED***;

export default Sketch;
