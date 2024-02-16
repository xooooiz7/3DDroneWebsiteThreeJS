
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";

//มีการปรับเปลี่ยนการ export เพื่อให้สามารถรับ prop ได้ง่ายขึ้น
const Chair = (props) =>{
  const { nodes, materials } = useGLTF('./models/chair.gltf') ; 


  //ขั้นตอนการ wrap Texture สำหรับ leather
  const leatherTextureProps = useTexture({
    map:'./textures/leather/Leather_011_basecolor.jpg',
    normalMap:'./textures/leather/Leather_011_normal.jpg',
    roughnessMap:'./textures/leather/Leather_011_roughness.jpg',
    aoMap: './textures/leather/Leather_011_ambientOcclusion.jpg'
  })
  
    leatherTextureProps.map.repeat.set(3,3) ;
    leatherTextureProps.normalMap.repeat.set(3,3);
    leatherTextureProps.roughnessMap.repeat.set(3,3) ; 
    leatherTextureProps.aoMap.repeat.set(3,3);
    
    leatherTextureProps.map.wrapS = 
    leatherTextureProps.map.wrapT = 
    leatherTextureProps.normalMap.wrapS = 
    leatherTextureProps.normalMap.wrapT = 
    leatherTextureProps.roughnessMap.wrapS = 
    leatherTextureProps.roughnessMap.wrapT = 
    leatherTextureProps.aoMap.wrapS = 
    leatherTextureProps.aoMap.wrapT =  
      THREE.RepeatWrapping;

    const fabricTextureProps = useTexture({
      map:'./textures/fabric/Substance_Graph_BaseColor.jpg',
      normalMap:'./textures/fabric/Substance_Graph_Normal.jpg',
      roughnessMap:'./textures/fabric/Substance_Graph_Roughness.jpg',
      aoMap: './textures/fabric/Substance_Graph_Roughness.jpg'
    })
    fabricTextureProps.map.repeat.set(3,3) ;
    fabricTextureProps.normalMap.repeat.set(3,3);
    fabricTextureProps.roughnessMap.repeat.set(3,3) ; 
    fabricTextureProps.aoMap.repeat.set(3,3);
    
    fabricTextureProps.map.wrapS = 
    fabricTextureProps.map.wrapT = 
    fabricTextureProps.normalMap.wrapS = 
    fabricTextureProps.normalMap.wrapT = 
    fabricTextureProps.roughnessMap.wrapS = 
    fabricTextureProps.roughnessMap.wrapT = 
    fabricTextureProps.aoMap.wrapS = 
    fabricTextureProps.aoMap.wrapT =  
      THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...leatherTextureProps}/>
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.06, 0.04]} >
        <meshStandardMaterial {...fabricTextureProps}/>
      </mesh>

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