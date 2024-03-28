import { createContext, useContext } from "react";
import { useState } from "react";
import { chairColors } from "../components/CustomPage/DatasetModel";
//ใช้ในการจัดการสถานะของ customization ของแอปพลิเคชัน

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [ keyNumber , setKeynumber] = useState(0);
    const [meterial , setMeterial] = useState(''); 
    const [slideNumber , setSlideNumber] = useState(0);
    const [objectName , setObjectName] = useState('')
    const [doneCount, setDoneCount] = useState(0);

    //ส่งไปหา Chair (สำหรับตัว ขา)
    const [legs , setLegs] = useState(''); 
    const [fC , setFC] = useState(''); 
    const [wings , setWings] = useState(''); 
    const [motors , setMotors] = useState(''); 
    const [battery , setBattery] = useState(''); 

    const [chairColor , setChairColor] = useState('');  // เข้าถึง arr [0]
    const [legColor , setLegColor] = useState('')
    // กำหนดค่าสำหรับส่ง จากตัว useState ข้างบน
    return <CustomizationContext.Provider value={{
        doneCount,setDoneCount,
        meterial , setMeterial,
        legs, setLegs ,
        chairColor ,setChairColor ,
        isVisible ,setIsVisible ,
        keyNumber , setKeynumber,
        slideNumber , setSlideNumber , 
        objectName ,setObjectName,
        legColor ,setLegColor,
        fC , setFC,
        wings , setWings,
        motors , setMotors,
        battery , setBattery
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext((CustomizationContext));
    return context;
}