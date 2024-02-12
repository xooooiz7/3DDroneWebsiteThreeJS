import { OrbitControls, ScrollControls } from "@react-three/drei"
import { FullDroneModel } from "./HomePageModel"
import { HomePageSectionOne } from "./HomePageSectionOne"
export const HomePage = () => {
    return (
        <>
        <directionalLight intensity={8.5} position={[1,6,9]} />
        <OrbitControls enableZoom={false} enableRotate={false}/>

        <ScrollControls pages={4} damping={0.2}>
            <HomePageSectionOne/>
            <FullDroneModel scale={3.5} position={[0.1, 0, -1.2]} rotation={[0.1, -0.9,-1.21]} />
        </ScrollControls>
        </>
    )
}