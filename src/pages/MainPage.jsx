import React from 'react'
import { HomePage } from './HomePage'
import { Canvas } from '@react-three/fiber'
import { NavBar } from '../components/Navbar/Nav'

function HomePageMain() {
  return ( 
    <>
    <NavBar/>
    <Canvas camera={{fov:64 , position : [2.3,1.5,2.3]}}>   
        <HomePage/>
    </Canvas> 
    </>
     
  )
}

export default HomePageMain