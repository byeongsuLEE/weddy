import ***REMOVED*** Environment, OrbitControls, useGLTF ***REMOVED*** from '@react-three/drei';
import ***REMOVED*** Canvas, useThree ***REMOVED*** from '@react-three/fiber';
import ***REMOVED*** Leva, useControls ***REMOVED*** from 'leva';
import ***REMOVED*** useEffect ***REMOVED*** from 'react';
import * as THREE from 'three';

function WeddingDress() ***REMOVED***
  const ***REMOVED*** scene ***REMOVED*** = useGLTF('../assets/dress_merge.glb');

  // Leva UI 컨트롤 정의
  const ***REMOVED***
    metalness, roughness, emissiveIntensity,
    sleeveLength, dressLength, dressWidth, neckHeight, neckWidth,
    showArms, showSkirt, showLaceShirt, showTop, showSkirt2,
    showDress3, showTop3, showShoulder2
  ***REMOVED*** = useControls(***REMOVED***
    metalness: ***REMOVED*** value: 0.05, min: 0, max: 1, step: 0.01, label: '메탈니스' ***REMOVED***,
    roughness: ***REMOVED*** value: 0.3, min: 0, max: 1, step: 0.01, label: '거칠기' ***REMOVED***,
    emissiveIntensity: ***REMOVED*** value: 0.4, min: 0, max: 2, step: 0.1, label: '밝기' ***REMOVED***,
    sleeveLength: ***REMOVED*** value: 1, min: 0.5, max: 1.5, step: 0.01, label: '소매 길이' ***REMOVED***,
    dressLength: ***REMOVED*** value: 0.5, min: 0.5, max: 1, step: 0.01, label: '드레스 넓이' ***REMOVED***,
    dressWidth: ***REMOVED*** value: 1, min: 0.5, max: 2, step: 0.01, label: '드레스 폭' ***REMOVED***,
    neckHeight: ***REMOVED*** value: 1, min: 0.8, max: 3, step: 0.01, label: '목 높이' ***REMOVED***,
    neckWidth: ***REMOVED*** value: 1, min: 0.8, max: 1.5, step: 0.01, label: '목 넓이' ***REMOVED***,
    showArms: ***REMOVED*** value: false, label: 'Arms Visible' ***REMOVED***,
    showSkirt: ***REMOVED*** value: false, label: 'Skirt Visible' ***REMOVED***,
    showLaceShirt: ***REMOVED*** value: false, label: 'Lace Shirt Visible' ***REMOVED***,
    showTop: ***REMOVED*** value: false, label: 'Top Visible' ***REMOVED***,
    showSkirt2: ***REMOVED*** value: false, label: 'Skirt2 Visible' ***REMOVED***,
    showDress3: ***REMOVED*** value: false, label: 'Dress3 Visible' ***REMOVED***,
    showTop3: ***REMOVED*** value: false, label: 'Top3 Visible' ***REMOVED***,
    showShoulder2: ***REMOVED*** value: false, label: 'Shoulder2 Visible' ***REMOVED***
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    scene.traverse((child) => ***REMOVED***
      if ((child as THREE.Mesh).isMesh) ***REMOVED***
        const mesh = child as THREE.Mesh;
        if (mesh.material) ***REMOVED***
          (mesh.material as THREE.MeshStandardMaterial).metalness = metalness;
          (mesh.material as THREE.MeshStandardMaterial).roughness = roughness;
          (mesh.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x888888);
          (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = emissiveIntensity;
          (mesh.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
        ***REMOVED***

        switch (mesh.name) ***REMOVED***
          case 'left_arm':
          case 'right_arm':
            mesh.visible = showArms;
            mesh.scale.x = sleeveLength;
            break;
          case 'skirt':
            mesh.visible = showSkirt;
            mesh.scale.z = dressWidth;
            mesh.scale.x = dressLength;
            break;
          case 'skirt2':
            mesh.visible = showSkirt2;
            mesh.scale.z = dressWidth;
            mesh.scale.x = dressLength;
            break;
          case 'lace_shirt':
            mesh.visible = showLaceShirt;
            mesh.scale.y = neckHeight;
            mesh.scale.z = neckWidth;
            break;
          case 'top2':
            mesh.visible = showTop;
            break;
          case 'dress_3':
            mesh.visible = showDress3;
            break;
          case 'top_3':
            mesh.visible = showTop3;
            break;
          case 'shorder_2':
            mesh.visible = showShoulder2;
            break;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***, [
    scene, metalness, roughness, emissiveIntensity,
    sleeveLength, dressLength, dressWidth, neckHeight, neckWidth,
    showArms, showSkirt, showLaceShirt, showTop, showSkirt2,
    showDress3, showTop3, showShoulder2
  ]);

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
  return (
    <div
      style=***REMOVED******REMOVED***
        width: 414,
        height: '100vh',
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
      <Leva collapsed=***REMOVED***false***REMOVED*** />
    </div>
  );
***REMOVED***;

export default Sketch;
