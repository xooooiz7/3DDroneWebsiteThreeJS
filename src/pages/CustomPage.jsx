// App /////////////////////

import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/Navbar/Nav'
import { CustomPage } from '../components/CustomPage/CustomPage'
import { Canvas } from '@react-three/fiber'
import { CustomizationProvider } from '../contexts/Customization'
import Configurator from '../components/CustomPage/Configurator'

function CustomPageMain() {
  return ( 
    <>
    <CustomizationProvider>
      <NavBar/>
      <Canvas>   
        <CustomPage/>
      </Canvas> 
      {/* อธิบายว่าใช้ทำอะไร */}
      <Configurator/> 
    </CustomizationProvider>
    
    </>
     
  )
}

export default CustomPageMain