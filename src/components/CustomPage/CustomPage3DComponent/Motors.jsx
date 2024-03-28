

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Motors(props) {
  const { nodes, materials } = useGLTF('./models/Motors/motors.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.195, 0.13,0.029]} rotation={[Math.PI / 2, 0, 0]} scale={0.0005}>
        <mesh geometry={nodes.dc_motor_mountbay.geometry} material={materials.phong2} position={[-31.15, 29.388, 16.014]} />
        <mesh geometry={nodes.pasted__dc_motor_mountbay.geometry} material={materials.pasted__phong2} position={[-23.646, 51.641, 16.014]} rotation={[0, 0, 2.411]} />
        <mesh geometry={nodes.pCylinder1.geometry} material={materials.standardSurface1} position={[-31.523, 41.896, 0.93]} scale={3.073} />
      </group>
      <group position={[-0.195, 0.13,-0.11]} rotation={[Math.PI / 2, 0, 0]} scale={0.0005}>
          <mesh geometry={nodes.pasted__dc_motor_mountbay001.geometry} material={materials.pasted__phong3} position={[-31.15, 29.388, 16.014]} />
          <mesh geometry={nodes.pasted__pasted__dc_motor_mountbay.geometry} material={materials.pasted__pasted__phong2} position={[-23.646, 51.641, 16.014]} rotation={[0, 0, 2.411]} />
          <mesh geometry={nodes.pasted__pCylinder1.geometry} material={materials.standardSurface1} position={[-31.523, 41.896, 0.93]} scale={3.073} />
      </group>
      <group position={[-0.016, 0.13,-0.11]} rotation={[Math.PI / 2, 0, 0]} scale={0.0005}>
            <mesh geometry={nodes.pasted__pasted__dc_motor_mountbay001.geometry} material={materials.pasted__pasted__phong3} position={[-31.15, 29.388, 16.014]} />
            <mesh geometry={nodes.pasted__pasted__pasted__dc_motor_mountbay.geometry} material={materials.pasted__pasted__pasted__phong2} position={[-23.646, 51.641, 16.014]} rotation={[0, 0, 2.411]} />
            <mesh geometry={nodes.pasted__pasted__pCylinder1.geometry} material={materials.standardSurface1} position={[-31.523, 41.896, 0.93]} scale={3.073} />
      </group>
      <group position={[-0.016, 0.13,0.028]} rotation={[Math.PI / 2, 0, 0]} scale={0.0005}>
              <mesh geometry={nodes.pasted__pasted__pasted__dc_motor_mountbay001.geometry} material={materials.pasted__pasted__pasted__phong3} position={[-31.15, 29.388, 16.014]} />
              <mesh geometry={nodes.pasted__pasted__pasted__pasted__dc_motor_mountbay.geometry} material={materials.pasted__pasted__pasted__pasted__phong2} position={[-23.646, 51.641, 16.014]} rotation={[0, 0, 2.411]} />
              <mesh geometry={nodes.pasted__pasted__pasted__pCylinder1.geometry} material={materials.standardSurface1} position={[-31.523, 41.896, 0.93]} scale={3.073} />
        </group>
    </group>
  )
}

useGLTF.preload('./models/Motors/motors.glb')
