
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Frame1 } from './Frame1'
import { useCustomization } from '../../contexts/Customization';
import {Frame2} from './Frame2'
import { A_Leg1 } from './A_Leg1';
import { B_Leg1 } from './B_Leg1';
import { B_Leg2 } from './B_Leg2';
import { cardTitles } from './DatasetModel';

export function MainFrame(props) {
  const { nodes, materials } = useGLTF('./models/MainFrame.glb')
  const {meterial,legs , chairColor ,cushionColor } = useCustomization() 
  console.log("LEgS" , legs)
  return (
    <group {...props} dispose={null}>
      <mesh  visible={false} geometry={nodes.MainDroneAssembly.geometry} material={materials.phongE6} position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.341} />
      
      
      <Frame1 visible={meterial === "Frame A"}/>
      <Frame2 visible={meterial === "Frame B"}/>
      <A_Leg1 visible={legs ===  "WingsA"}/>
      <B_Leg1 visible={legs === "WingsB"}/>
      <B_Leg2 visible={legs === "WingsC"}/>
    </group>
  )
}
useGLTF.preload('./models/MainFrame.glb')
