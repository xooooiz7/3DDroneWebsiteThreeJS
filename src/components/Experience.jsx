import { OrbitControls, ScrollControls } from "@react-three/drei"
import { ModelPhone } from "./ModelIphone"

export const Experience = () => {
    return (
        <>

        <ambientLight intensity={10}/>
        {/* ใช้สำหรับการควบคุม ทิศทางการหมุน */}
        <OrbitControls enableZoom={false}/>
        {/* ค่าที่ใช้ในการกำหนดจำนวนของหน้าที่สามารถเลื่อนได้ */}
        <ScrollControls pages={2} damping={0.25}>
        <ModelPhone scale={-0.005} />
        </ScrollControls>
        
        </>
    )
}