
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


//มีการปรับเปลี่ยนการ export เพื่อให้สามารถรับ prop ได้ง่ายขึ้น
const Chair = (props) =>{
  const { nodes, materials } = useGLTF('./models/chair.gltf')
  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair} />
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.06, 0.04]} />

      {/* ตอนปั้น Model เขาปั้นมา 2 ขา
      ขา 1  */}
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      {/* ขา 2 ปิดการมองเห็นโดยใช้คำสั่ง visible = false */}
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false} />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')

export default Chair;