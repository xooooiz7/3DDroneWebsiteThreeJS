import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../../contexts/Customization'


export function A_Leg1(props) {
  const { nodes, materials } = useGLTF('./models/Leg/A_Leg1.glb')
  const {legColor} = useCustomization();

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.lg1.geometry} material={materials.phong77} position={[-3.909, -0.582, 1.262]} scale={0.423} >
            <meshStandardMaterial color={ legColor } />

          </mesh>
        <mesh geometry={nodes.pasted__lg1.geometry} material={materials.pasted__phong77} position={[3.797, 0.686, 1.262]} rotation={[0, 0, Math.PI]} scale={0.423} >
        <meshStandardMaterial color={ legColor } />

        </mesh>

      </group>
    </group>
  )
}

useGLTF.preload('./models/Leg/A_Leg1.glb')
