import { OrbitControls, ScrollControls } from "@react-three/drei"
import { FullDroneModel } from "../components/HomePage/HomePageModel"
import { HomePageSectionOne } from "../components/HomePage/HomePageSectionOne"
import { HomePageSectionTwo } from "../components/HomePage/HomePageSectionTwo"
export const HomePage = () => {
    return (
        <>
        <directionalLight intensity={8.5} position={[1,6,9]} />
        <OrbitControls enableZoom={false} enableRotate={false}/>

        <ScrollControls pages={3.8} damping={0.25}>
            <HomePageSectionOne/>
            <FullDroneModel scale={3.5} position={[0.1, 0, -1.2]} rotation={[0.1, -0.9,-1.21]} />
        </ScrollControls>
        </>
    )
}