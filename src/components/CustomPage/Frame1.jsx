

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Frame1(props) {
  const { nodes, materials } = useGLTF('./models/Frame1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Frame.geometry} material={materials.phong76} position={[0.058, 0.079, 0.043]} rotation={[-Math.PI, -1.571, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('./models/Frame1.glb')
