
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Frame2(props) {
  const { nodes, materials } = useGLTF('./models/Frame/Frame2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.018, 0.065, -0.054]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <group position={[22.47, 48.731, 81.525]} scale={12.468}>
          <mesh geometry={nodes.splitDrone_use___3_Full_Machine1AB_ALL.geometry} material={materials['splitDrone_use___3_Full_Machine1:phong1']} position={[-10, 1, -10.635]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.035} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Frame/Frame2.glb')
