import { OrbitControls, ScrollControls } from "@react-three/drei"
import { FullDroneModel } from "../components/HomePage/HomePageModel"
import { HomePageSectionOne } from "../components/HomePage/HomePageSectionOne"
import { HomePageSectionTwo } from "../components/HomePage/HomePageSectionTwo"
import React, { useState, useEffect, useRef } from 'react';
import { ScrollManager } from "../components/HomePage/ScrollManager"
 

export const HomePage = ({ value }) => {
    const [section, setSection] = useState(0);
    const [defaultvalue, setValue] = useState(0);

    const updateValue = (newValue) => {
        setValue(newValue);
    };
   
    return (
        <>
        <directionalLight intensity={5.5} position={[1,6,9]} />
        <OrbitControls enableZoom={false} enableRotate={false}/>
        <ScrollControls pages={3.8} damping={0.25} >

            <ScrollManager section={defaultvalue} onSectionChange={setSection}  />

            <HomePageSectionOne updateValue={updateValue} />
            <FullDroneModel scale={3.5} position={[0.1, 0, -1.2]} rotation={[0.1, -0.9,-1.21]} />
        </ScrollControls>

       </>
    )
}