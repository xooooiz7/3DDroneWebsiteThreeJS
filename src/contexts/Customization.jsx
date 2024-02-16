import { createContext, useContext } from "react";
import { useState } from "react";

//ใช้ในการจัดการสถานะของ customization ของแอปพลิเคชัน

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    //ฟังก์ชันส่งค่าไป หน้า interface เพื่อส่งไปหา Chair (สำหรับตัว Wrap)
    const [meterial , setMeterial] = useState('leather'); 
    //ส่งไปหา Chair (สำหรับตัว ขา)
    const [legs , setLegs] = useState(1); //useState 1 หมายถึง ค่า default

    // กำหนดค่าสำหรับส่ง จากตัว useState ข้างบน
    return <CustomizationContext.Provider value={{
        meterial ,
        setMeterial,
        legs,
        setLegs
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext((CustomizationContext));
    return context;
}