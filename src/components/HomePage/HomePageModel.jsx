import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'

import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';


export const FLOOR_HEIGHT = -0.1 ; 
export const NB_FLOORS = 5; 

export const time_slide = 0.01;

export function FullDroneModel(props) {

  const { nodes, materials } = useGLTF('./models/modelwithcolor.glb')
  
  const ref = useRef()
  const tl = useRef();

  const duct_1 = useRef();
  const duct_2 = useRef();
  const duct_3 = useRef();
  const duct_4 = useRef();
  const FlightController = useRef();
  const wifiInput = useRef();
  const wing_1 = useRef();  
  const wing_2 = useRef();
  const wing_3 = useRef();
  const wing_4 = useRef();
  const scroll = useScroll() ;
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(()=>{
    tl.current = gsap.timeline();

    tl.current.to(
        ref.current.rotation,
        {
            duration:0.007,
            x: -0.0001,
            y: -0.75,
            z: -0.17,
        },
    );

    tl.current.to(
      ref.current.position,
      {
          duration:0.0078,
          x:  -0.9,
          y: -FLOOR_HEIGHT *(NB_FLOORS +3) ,
          z:1
      },0
    
    );

    tl.current.to(
      ref.current.position,
      {
        duration: time_slide,
        y: -FLOOR_HEIGHT * NB_FLOORS+2,
      },
    );

    tl.current.to(
      wing_1.current.position,
      {
          duration:time_slide,
          x: -50,
          y:-40
      },0

    );

    tl.current.to(
      wing_2.current.position,
      {
          duration:time_slide,
          x: -40,
          y:-60
      },0

    );
    tl.current.to(
      wing_3.current.position,
      {
          duration:time_slide,
          x: -40,
          y:-60
      },0

    );
    tl.current.to(
      wing_4.current.position,
      {
          duration:time_slide,
          x: -10,
          y:-40
      },0

    );
    tl.current.to(
      wing_4.current.position,
      {
          duration:time_slide,
          x: -10,
          y:-40
      },0
    );
    tl.current.to(
      duct_1.current.position,
      {
          duration:time_slide,
          x: -20,
          y:-60
      },0
    );
    tl.current.to(
      duct_2.current.position,
      {
          duration:time_slide,
          x:350,
          y:-40,
          z:-20
      },0
    );
    tl.current.to(
      duct_3.current.position,
      {
          duration:time_slide,
          x:-400,
          y:-40,
          z:-30
      },0
    );
    tl.current.to(
      duct_4.current.position,
      {
          duration:time_slide,
          x: -30,
          y:-70,
          z:-20
      },0
    );
    tl.current.to(
      wifiInput.current.position,
      {
          duration:time_slide,
          x: 10,
          y:-50,
          z:-20
      },0
    );
    tl.current.to(
      FlightController.current.position,
      {
          duration: time_slide,
          x: 10,
          y:0,
          z:-40
      },0
    );
    
  },[]);
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="group" position={[0.03, 0.01, -0.35]}  rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="baseDroneSplit">
            <group name="base" position={[22.47, 48.731, 81.525]} scale={12.468}>
              <mesh name="AB_ALL" geometry={nodes.AB_ALL.geometry} material={materials['phong1.001']} position={[0, -3.688, -17.963]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.082} />
            </group>
            <group name="duct1" ref={duct_1} position={[150, 0, -18.856]}>
              <mesh name="DroneModel_3polySurface1" geometry={nodes.DroneModel_3polySurface1.geometry} material={materials['standardSurface1.001']} position={[-33.189, 31.719, -32.235]} scale={0.982} />
            </group>
            <group name="duct2" ref={duct_2} position={[190.315, -158.693, 0]}>
              <mesh name="DroneModel_3pasted__polySurface1" geometry={nodes.DroneModel_3pasted__polySurface1.geometry} material={materials['standardSurface1.001']} position={[-33.383, -358.51, -30.349]} scale={0.982} />
            </group>
            <group name="duct3" ref={duct_3} position={[-500.383, 150.151, 0]}>
              <mesh name="DroneModel_3pasted__pasted__polySurface1" geometry={nodes.DroneModel_3pasted__pasted__polySurface1.geometry} material={materials['standardSurface1.001']} position={[354.291, -365.117, -30.349]} scale={0.982} />
            </group>
            <group name="duct4" ref={duct_4} position={[120, -250, 0]}>
              <mesh name="DroneModel_3pasted__pasted__pasted__polySurface1" geometry={nodes.DroneModel_3pasted__pasted__pasted__polySurface1.geometry} material={materials['standardSurface1.001']} position={[352.921, 35.171, -30.349]} scale={0.982} />
            </group>
            <group name="FlightController" ref={FlightController} position={[-260,-10, -33.862]}>
              <mesh name="pasted__pixhawk" geometry={nodes.pasted__pixhawk.geometry} material={materials['pasted__phong1.001']} position={[-108.85, 47.526, -147.873]} rotation={[0, 0, -Math.PI / 2]} scale={1.762} />
            </group>
            <group name="wifiInput" ref={wifiInput} position={[192.771, -70.708, -19.497]}>
              <mesh name="DroneModel_3pasted__pasted__pCylinder3" geometry={nodes.DroneModel_3pasted__pasted__pCylinder3.geometry} material={materials['standardSurface1.001']} position={[193.238, 48.194, -129.429]} rotation={[0, 1.571, 0]} scale={4.359} />
              <mesh name="DroneModel_3pasted__pCylinder3" geometry={nodes.DroneModel_3pasted__pCylinder3.geometry} material={materials['standardSurface1.001']} position={[123.15, 48.189, -129.241]} rotation={[0, 1.571, 0]} scale={4.542} />
              <mesh name="DroneModel_3pCube1" geometry={nodes.DroneModel_3pCube1.geometry} material={materials['standardSurface1.001']} position={[47.59, 43.268, -125.266]} scale={0.941} />
            </group>
            <group name="wing1" ref={wing_1} position={[61.327, -150.931, -18.808]}>
              <mesh name="DroneModel_3Drone26Silver" geometry={nodes.DroneModel_3Drone26Silver.geometry} material={materials['DroneModel_3:Drone26:Silver2.001']} position={[45.76, -5.272, -208.196]} scale={-7.485} />
              <mesh name="DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_de29f43" geometry={nodes.DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_de29f43.geometry} material={materials['DroneModel_3:Drone26:White1.001']} position={[45.76, -5.272, -208.18]} scale={-7.485} />
              <mesh name="DroneModel_3pasted__pCylinder1" geometry={nodes.DroneModel_3pasted__pCylinder1.geometry} material={materials['standardSurface1.001']} position={[192.043, -143.975, -173.973]} scale={13.496} />
            </group>
            <group name="wing2" ref={wing_2} position={[90.875, 20.932, -20.016]}>
              <mesh name="DroneModel_3Drone25Silver" geometry={nodes.DroneModel_3Drone25Silver.geometry} material={materials['DroneModel_3:Drone25:Silver2.001']} position={[338.859, 386.286, -209.032]} scale={-7.485} />
              <mesh name="DroneModel_3pasted__pasted__pasted__pasted__pasted__Drone2" geometry={nodes.DroneModel_3pasted__pasted__pasted__pasted__pasted__Drone2.geometry} material={materials['DroneModel_3:Drone25:White1.001']} position={[338.859, 386.286, -209.016]} scale={-7.485} />
              <mesh name="DroneModel_3pasted__pasted__pasted__pCylinder1" geometry={nodes.DroneModel_3pasted__pasted__pasted__pCylinder1.geometry} material={materials['standardSurface1.001']} position={[190.672, 246.985, -173.973]} scale={13.496} />
            </group>
            <group name="wing3" ref={wing_3} position={[-50.25, 12.062, -10.274]}>
              <group name="group1">
                <mesh name="DroneModel_3Drone27Silver" geometry={nodes.DroneModel_3Drone27Silver.geometry} material={materials['DroneModel_3:Drone27:Silver2.001']} position={[-47.54, 109.846, -208.471]} scale={-7.485} />
                <mesh name="DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_7b61e7f" geometry={nodes.DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_7b61e7f.geometry} material={materials['DroneModel_3:Drone27:White1.001']} position={[-47.54, 109.846, -208.455]} scale={-7.485} />
              </group>
              <mesh name="DroneModel_3pasted__pasted__pCylinder1" geometry={nodes.DroneModel_3pasted__pasted__pCylinder1.geometry} material={materials['standardSurface1.001']} position={[-192.425, 247.105, -173.973]} scale={13.496} />
            </group>
            <group name="wing4" ref={wing_4} position={[-30.53, -131.521, -19.945]}>
              <mesh name="DroneModel_3Drone38Silver" geometry={nodes.DroneModel_3Drone38Silver.geometry} material={materials['DroneModel_3:Drone38:Silver2.001']} position={[-46.175, -0.228, -209.032]} scale={-7.485} />
              <mesh name="DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_fae6499" geometry={nodes.DroneModel_3pasted__pasted__pasted__pasted__pasted__pa_fae6499.geometry} material={materials['DroneModel_3:Drone38:White1.001']} position={[-46.175, -0.228, -209.016]} scale={-7.485} />
              <mesh name="DroneModel_3pCylinder1" geometry={nodes.DroneModel_3pCylinder1.geometry} material={materials['standardSurface1.001']} position={[-191.336, -137.368, -173.973]} scale={13.496} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/modelwithcolor.glb')
