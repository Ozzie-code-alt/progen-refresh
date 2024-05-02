
"use client"

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import CanvasLoader from "./Loader";
import { Preload } from "@react-three/drei";
import StarsCanvas from './StarCanvas';

const texturePlanet = "/WorkAssets/texture.webp"
const RotatingPlanet = () => {
  const texture = useLoader(THREE.TextureLoader, texturePlanet);
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={sphereRef} scale={[4, 4, 4]} position={[0, -2.5, -1.1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"gray"} map={texture}  specular={"#888888"} shininess={10}/>
    </mesh>
  );
};

const SmallPlanet = () => {
  const texture = useLoader(THREE.TextureLoader, texturePlanet);
  const sphereRef = useRef();

  return (
    <mesh ref={sphereRef} scale={[2, 2, 2]} position={[0, 4, 0]}>
      <pointLight position={[0, -2, 0]} intensity={10} />
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={"#82E9FF"} map={texture}  specular={"#888888"} shininess={10}/>
    </mesh>
  );
};

const HeaderHero = () => {
  return (
    <div className="relative h-72 overflow-hidden">
      <div className="h-screen absolute inset-0">

        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>

        <Canvas camera={{ position: [0, 0, 3] }}>
          <pointLight position={[0, 0, 0]} color={"#82E9FF"} intensity={20}/>
          <pointLight position={[0, 2.3, 0]}  intensity={20}/>

          <Suspense fallback={<CanvasLoader />}>
            <SmallPlanet />
            <RotatingPlanet />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>


    </div>
  );
}

export default HeaderHero;
