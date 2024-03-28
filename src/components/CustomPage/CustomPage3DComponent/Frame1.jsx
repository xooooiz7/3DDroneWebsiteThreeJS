

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../../contexts/Customization'

export function Frame1(props) {
  const { nodes, materials } = useGLTF('./models/Frame/Frame1.glb')
  const {meterial,legs , chairColor ,cushionColor  } = useCustomization() 

  console.log("Chaircolor " , chairColor)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Frame.geometry} material={materials.phong76} position={[0.058-0.1, 0.079+0.04, 0.043]} rotation={[-Math.PI, -1.571, 0]} scale={0.001} >
    
      
      <meshStandardMaterial color={ chairColor } />

      </mesh>
    </group>
  )
}

useGLTF.preload('./models/Frame/Frame1.glb')
