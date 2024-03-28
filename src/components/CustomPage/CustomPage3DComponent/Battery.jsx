
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Battery(props) {
  const { nodes, materials } = useGLTF('./models/Battery/battery.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BASE_BATERIA_TALADRO.geometry} material={materials.phong1} position={[-0.144, 0.086, -0.04]} rotation={[-3.1,0, 0]} scale={0.0007} />
    </group>
  )
}

useGLTF.preload('./models/Battery/battery.glb')
