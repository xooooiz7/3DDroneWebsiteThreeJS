
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Wings(props) {
  const { nodes, materials } = useGLTF('./models/Wings/Wings.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Assembly___1045_propeller_1.geometry} material={materials.phong4} position={[-0.127, 0.085,0.0065]} rotation={[Math.PI / 2, 0, 0]} scale={0.6} />
      <mesh geometry={nodes.Assembly___1045_propeller_2.geometry} material={materials.phong5} position={[-0.115, 0.085,0.0065]} rotation={[Math.PI / 2, 0, 0]} scale={0.6} />
      <mesh geometry={nodes.Assembly___1045_propeller_3.geometry} material={materials.phong6} position={[-0.115, 0.085,-0.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.6} />
      <mesh geometry={nodes.Assembly___1045_propeller_4.geometry} material={materials.phong7} position={[-0.127, 0.085,-0.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.6} />
    </group>
  )
}

useGLTF.preload('./models/Wings/Wings.glb')
