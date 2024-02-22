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
    //ส่งไปหา Chair (สำหรับตัว ขา)
    const [legs , setLegs] = useState(''); //useState 1 หมายถึง ค่า default

    const [chairColor , setChairColor] = useState(chairColors[0]);  // เข้าถึง arr [0]

    // กำหนดค่าสำหรับส่ง จากตัว useState ข้างบน
    return <CustomizationContext.Provider value={{
        meterial ,
        setMeterial,
        legs,
        setLegs ,
        chairColor , 
        setChairColor ,
        isVisible ,
        setIsVisible ,
        keyNumber , 
        setKeynumber,
        slideNumber , 
        setSlideNumber , 
        objectName , 
        setObjectName
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext((CustomizationContext));
    return context;
}