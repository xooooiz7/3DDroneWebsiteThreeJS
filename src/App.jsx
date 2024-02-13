import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Canvas} from '@react-three/fiber'
import { HomePage } from './pages/HomePage'
import './App.scss';
import { HomePageSectionNav } from './components/HomePage/HomePageSectionComponents'

function App() {

  return (
    <>
     <HomePageSectionNav/>
     <Canvas camera={{
      fov:64 ,
      position : [2.3,1.5,2.3] 
     }}>  
      <HomePage/>
      
     </Canvas>
    </>
  )
}

export default App
