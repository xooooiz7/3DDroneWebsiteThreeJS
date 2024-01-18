import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'

// ถ้าทำการ import gsap ปกติมันจะ 'gsap/gsap-core'; แต่ให้ใช้ gsap แทน เนื่องจากใช้ได้ทุกอย่าง
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

//ค่าความสูงของเว็บในการ scroll
//กำหนดค่าเป็นติดลบ เพราะตัว model กลับด้าน
export const FLOOR_HEIGHT = -2.3 ; 
export const NB_FLOORS = 2; 

export function ModelPhone(props) {
  const { nodes, materials } = useGLTF('./models/iphone_13_concept.glb')

  //ใช้ useRef() เพื่อเก็บ reference ของ object 3D.
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  //ใช้ useScroll() เพื่อตรวจจับค่า scroll ปัจจุบัน.
  const scroll = useScroll() ; 

  //ใช้ useFrame() ในการอัปเดต frame ของ Three.js โดยการเลื่อนแบบจำลองตามค่า scroll.
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })

  
  //ควบคุมการ render และ layout แล้วจะทำการกำหนดการเคลื่อนไหวโดยใช้ gsap.
  useLayoutEffect(()=>{
    tl.current = gsap.timeline();

    // animation แนวตั้ง
    tl.current.to(
        ref.current.position,
        {
            duration:2,
            y: -FLOOR_HEIGHT *(NB_FLOORS - 1) ,
        },
        0
    );
   
    //หมุน 
    // tl.current.from(
        
    //     libraryRef.current.position,{
    //         duration:0.5,
    //         y:-Math.PI/2,
    //     },0.5
    // )

    tl.current.from(
        //current position มาจากตำแหน่งการ scroll mouse เมื่อลงไปถึงจาก group
        libraryRef.current.position,{
            duration:0.5,
            x:-2,
        },0.5
    )

    tl.current.from(
        atticRef.current.postion,{
            duration:1.5 , 
            y:2,
        } , 0
    )

    
    // tl.current.from(
    //     atticRef.current.position,{
    //         duration : 0.5,
    //         z:-2,
    //     },1.5
    // );

  },[]);
  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        {/* ทำการสร้าง group แล้วเรียกการใช้ useRef มาจากตัว libraryRef ข้างบน */}
        <group ref={libraryRef}> 
        <mesh geometry={nodes.IPHONE13_Frame1_0.geometry} material={materials.Frame1} />
        <mesh geometry={nodes.IPHONE13_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
        <mesh geometry={nodes.IPHONE13_gray2_0.geometry} material={materials.gray2} />
        <mesh geometry={nodes.IPHONE13_AntennaStrip_0.geometry} material={materials.AntennaStrip} />
        <mesh geometry={nodes.Body_Back1_0.geometry} material={materials.Back1} />
        <mesh geometry={nodes.Body_Bezel1_0.geometry} material={materials.Bezel1} />
        <mesh geometry={nodes.Body_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
        <mesh geometry={nodes.Body_CameraGlass1_0.geometry} material={materials.CameraGlass1} />
        <mesh geometry={nodes.Body_Logo1_0.geometry} material={materials.Logo1} />
        <mesh geometry={nodes.FrontCamLens_Lens1_0.geometry} material={materials.Lens1} />
        <mesh geometry={nodes.Screen_Screen1_0.geometry} material={materials.Screen1} />
        <mesh geometry={nodes.CamModule_CameraModule1_0.geometry} material={materials.CameraModule1} />
        <mesh geometry={nodes.CamModule_CameraMGlass1_0.geometry} material={materials['CameraM.Glass1']} />
        <mesh geometry={nodes['Camera_Camera(1)_0'].geometry} material={materials.Camera1} />
        </group>
        <group ref={atticRef}>
        <mesh geometry={nodes.Camera_Chrome1_0.geometry} material={materials.Chrome1} />
        <mesh geometry={nodes.Camera_CameraBlack1_0.geometry} material={materials.CameraBlack1} />
        <mesh geometry={nodes.Camera_CameraGray1_0.geometry} material={materials.CameraGray1} />
        <mesh geometry={nodes.Camera_CameraGlass1_0.geometry} material={materials.CameraGlass1} />
        <mesh geometry={nodes.Flash_Chrome2_0.geometry} material={materials.Chrome2} />
        <mesh geometry={nodes.Flash_Flash1_0.geometry} material={materials.Flash1} />
        <mesh geometry={nodes.Mic_Chrome2_0.geometry} material={materials.Chrome2} />
        <mesh geometry={nodes.Mic_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
        <mesh geometry={nodes.Lens1_Lens1_0.geometry} material={materials.Lens1} />
        <mesh geometry={nodes.Lens2_Lens1_0.geometry} material={materials.Lens1} />
        <mesh geometry={nodes.PowerButton_Frame1_0.geometry} material={materials.Frame1} />
        <mesh geometry={nodes.VolumeButton_Frame1_0.geometry} material={materials.Frame1} />
        <mesh geometry={nodes.MuteButton_Frame1_0.geometry} material={materials.Frame1} />
        <mesh geometry={nodes.SIMTray_Frame1_0.geometry} material={materials.Frame1} />
        <mesh geometry={nodes.SIMTray_Chrome1_0.geometry} material={materials.Chrome1} />
        <mesh geometry={nodes.Port_LPort_0.geometry} material={materials['L.Port']} />
        <mesh geometry={nodes.Port_Frame1_0.geometry} material={materials.Frame1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/iphone_13_concept.glb')
