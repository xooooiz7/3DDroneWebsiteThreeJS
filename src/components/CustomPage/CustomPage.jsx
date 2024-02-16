// Experinece /////////////////////


import './CustomPage.scss';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import Chair from './Chair';

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
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
               <Chair />
          <boxGeometry />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          
        </mesh>
      </PresentationControls>
    </>
    )
  }
  