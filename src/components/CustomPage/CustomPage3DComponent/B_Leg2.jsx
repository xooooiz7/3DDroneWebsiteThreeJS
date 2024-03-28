import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'; // Import THREE from three.js library

export function B_Leg2(props) {
  const { nodes, materials } = useGLTF('./models/Leg/B_Leg2.glb')
  materials['phongE7.001'].color = new THREE.Color(0xffffff); // Assuming THREE is imported

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[0, 12.272, 0]}>
          <mesh geometry={nodes.pasted__pCylinder1.geometry} material={materials['phongE7.001']} position={[6.134-9.3, -6.011-1, -6.087-3.6]} scale={0.655} />
        </group>
        <group position={[-12.291, 0, 0]}>
          <group position={[0, 12.272, 0]}>
            <mesh geometry={nodes.pasted__pasted__pCylinder1.geometry} material={materials['phongE7.001']} position={[6.134-15, -6.011-1, -6.087-3.6]} scale={0.655} />
          </group>
        </group>
        <group position={[0, -12.265, 0]}>
          <group position={[-12.291, 0, 0]}>
            <group position={[0, 12.272, 0]}>
              <mesh geometry={nodes.pasted__pasted__pasted__pCylinder1.geometry} material={materials['phongE7.001']} position={[6.134-15, -6.011-3, -6.087-3.6]} scale={0.655} />
            </group>
          </group>
        </group>
        <mesh geometry={nodes.pCylinder1.geometry} material={materials['phongE7.001']} position={[6.134-9.3, -6.011-3, -6.087-3.6]} scale={0.655} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Leg/B_Leg2.glb')
