import { OrbitControls, ScrollControls } from "@react-three/drei"
import { FullDroneModel } from "./Modelwithcolor"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
        <directionalLight intensity={8.5} position={[1,6,9]} />
        <OrbitControls enableZoom={false} enableRotate={false}/>
        
        <ScrollControls pages={4} damping={0.2}>
            
            <Overlay/>
            <FullDroneModel scale={3.5} position={[0.1, 0, -1.2]} rotation={[0.1, -0.9,-1.21]} />
        </ScrollControls>
        </>
    )
}