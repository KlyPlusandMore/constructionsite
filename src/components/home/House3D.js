import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Environment, Html } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/house_under_construction3_fbx.glb');
  return <primitive object={scene} scale={[0.12, 0.12, 0.12]} position={[0, 2, 0]} rotation={[0, Math.PI / 2, 0]} />;
}

const LoadingScreen = () => (
  <Html center>
    <div className="text-white text-xl">Loading 3D Model...</div>
  </Html>
);

const House3D = () => {
  const cameraRef = useRef();
  
  return (
    <section className="relative h-[300px] bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas>
        <Suspense fallback={<LoadingScreen />}>
          <PerspectiveCamera 
            makeDefault
            ref={cameraRef}
            position={[2, 4, 2]} 
            fov={25} 
            near={0.1} 
            far={1000}
          />
          <Environment preset="sunset" />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 11, 5]} intensity={1.5} castShadow />
          <Model />
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 4}
            autoRotate
            autoRotateSpeed={0.5}
            target={[0, 2, 0]}
            enablePan={true}
            panSpeed={0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default House3D;

useGLTF.preload('/models/house_under_construction3_fbx.glb');