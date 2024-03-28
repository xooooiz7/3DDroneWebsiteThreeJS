import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../../contexts/Customization'


export function A_Leg1(props) {
  const { nodes, materials } = useGLTF('./models/Leg/A_Leg1.glb')
  const {legColor} = useCustomization();

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.lg1.geometry} material={materials.phong77} position={[-3.909-12-0.7, -0.582-2, 1.262-3.2]} scale={0.423} >
            <meshStandardMaterial color={ legColor } />

          </mesh>
        <mesh geometry={nodes.pasted__lg1.geometry} material={materials.pasted__phong77} position={[3.797-12+0.5, 0.686-2, 1.262-3.2]} rotation={[0, 0, Math.PI]} scale={0.423} >
        <meshStandardMaterial color={ legColor } />

        </mesh>

      </group>
    </group>
  )
}

useGLTF.preload('./models/Leg/A_Leg1.glb')
