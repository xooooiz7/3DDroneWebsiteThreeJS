
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Frame1 } from './CustomPage3DComponent/Frame1'
import { useCustomization } from '../../contexts/Customization';
import {Frame2} from './CustomPage3DComponent/Frame2'
import { A_Leg1 } from './CustomPage3DComponent/A_Leg1';
import { B_Leg1 } from './CustomPage3DComponent/B_Leg1';
import { B_Leg2 } from './CustomPage3DComponent/B_Leg2';
import {Battery} from './CustomPage3DComponent/Battery'
import {FC} from './CustomPage3DComponent/FC'
import {Motors} from './CustomPage3DComponent/Motors'
import {Wings} from './CustomPage3DComponent/Wings'
import { cardTitles } from './DatasetModel';

export function MainFrame(props) {
  const { nodes, materials } = useGLTF('./models/MainFrame.glb')
  const {meterial,legs,motors,battery,fC,wings,chairColor ,cushionColor } = useCustomization() 

  console.log('motors' , motors)
  console.log('battery' , battery)
  console.log('fC' , fC)
  console.log('wings' , wings)

  return (
    <group {...props} dispose={null}>
      <mesh  visible={false} geometry={nodes.MainDroneAssembly.geometry} material={materials.phongE6} position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.341} />
      <Battery visible= {battery === "Battery A"}/>
      <FC visible= {fC === "FC A"}/>
      <Motors visible= {motors === "Motors A"}/>
      <Wings visible= {wings === "Wings A"}/>
      <Frame1 visible={meterial === "Frame A" || meterial !== "Frame B" } />
      <Frame2 visible={meterial === "Frame B" }/>
      <A_Leg1 visible={legs ===  "Leg A" && meterial !== "Frame B" } />
      <B_Leg1 visible={legs === "Leg B" && meterial !== "Frame B" } />
      <B_Leg2 visible={legs === "Leg C" && meterial !== "Frame B" } />
    </group>
  )
}
useGLTF.preload('./models/MainFrame.glb')
