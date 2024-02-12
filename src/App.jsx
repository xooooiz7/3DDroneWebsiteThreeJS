import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Canvas} from '@react-three/fiber'
import { Experience } from './components/Experience'
import './App.scss';
import { NavOverlay } from './components/Overlay'

function App() {

  return (
    <>
     <NavOverlay/>
     <Canvas camera={{
      fov:64 ,
      position : [2.3,1.5,2.3] 
     }}>
      <Experience/>
     </Canvas>
    </>
  )
}

export default App
