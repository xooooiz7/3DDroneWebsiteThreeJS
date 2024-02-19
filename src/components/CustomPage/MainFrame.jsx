
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Frame1 } from './Frame1'
import { useCustomization } from '../../contexts/Customization';
import {Frame2} from './Frame2'


export function MainFrame(props) {
  const { nodes, materials } = useGLTF('./models/MainFrame.glb')
  const {meterial,legs , chairColor ,cushionColor } = useCustomization() // เป้นตัวแปรจากไฟล์ Customize ส่งค่าโดยใช้ useState

  return (
    <group {...props} dispose={null}>
      <mesh  visible={legs===1} geometry={nodes.MainDroneAssembly.geometry} material={materials.phongE6} position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.341} />
      <Frame1 visible={legs===2}/>
      <Frame2 visible={legs===3}/>
    </group>
  )
}
useGLTF.preload('./models/MainFrame.glb')
