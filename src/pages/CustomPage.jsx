import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/Navbar/Nav'
import { CustomPage } from '../components/CustomPage/CustomPage'
import { Canvas } from '@react-three/fiber'
// App Page On Video


function CustomPageMain() {
  return ( 
    <>
    <NavBar/>
      <Canvas>   
        <CustomPage/>
    </Canvas> 
    </>
     
  )
}

export default CustomPageMain