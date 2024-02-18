import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props) => {
  const { nodes, materials } = useGLTF('./models/table.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.042, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.pasted__pCylinder1.geometry} material={materials['standardSurface1.001']} position={[0, 0, -5.751]} />
      </group>

      <group position={[0, -0.045, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.pasted__pCube2.geometry} material={materials['standardSurface1.001']} position={[0, 0, -5.951]} scale={2.026} />
      </group>
      
      <mesh geometry={nodes.pCube1.geometry} material={materials['standardSurface1.001']} position={[0, 0.037, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.027}  />
      <mesh geometry={nodes.pCylinder1.geometry} material={materials['standardSurface1.001']} position={[0, 0.058, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}  />
      <mesh geometry={nodes.pCube2.geometry} material={materials['standardSurface1.001']} position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} visible={false} />
    </group>
  )
}
export default Table;

useGLTF.preload('./models/table.glb')
