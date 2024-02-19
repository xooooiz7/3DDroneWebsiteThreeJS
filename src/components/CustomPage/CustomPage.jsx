// Experinece /////////////////////


import './CustomPage.scss';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import Chair from './Chair';
import { MainFrame } from './MainFrame';

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
        zoom={0.8}
        
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
               <MainFrame scale={3.5} position={[-0.3, 0, 0]}/>
          <boxGeometry />
        </Stage>
        
      </PresentationControls>
    </>
    )
  }
  