

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FC(props) {
  const { nodes, materials } = useGLTF('./models/FC/FC.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pixhawk.geometry} material={materials.phong3} position={[-0.14, 0.12, -0.06]} rotation={[Math.PI / 2, 0, 0]} scale={0.0008} />
    </group>
  )
}

useGLTF.preload('./models/FC/FC.glb')
