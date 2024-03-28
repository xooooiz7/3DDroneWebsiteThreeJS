import './CustomPage.scss';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { MainFrame } from './MainFrame';
import { OrbitControls } from '@react-three/drei';


import {
   MeshReflectorMaterial,
   PresentationControls,
   Stage,
 } from "@react-three/drei";

export const CustomPage = () => {
  
    return (
      <>
      <PresentationControls
        speed={1.5}
        global
        zoom={0.9}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
              <OrbitControls/>
               <MainFrame scale={3} position={[-0.5, 0.2, -1]} rotation={[0.4, 0, 0]}/>
        </Stage>
        
      </PresentationControls>
    </>
    )
  }
  