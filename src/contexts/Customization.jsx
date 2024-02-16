import { createContext, useContext } from "react";
import { useState } from "react";

//ใช้ในการจัดการสถานะของ customization ของแอปพลิเคชัน

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    //ฟังก์ชันส่งค่าไป หน้า interface เพื่อส่งไปหา Chair (สำหรับตัว Wrap)
    const [meterial , setMeterial] = useState('leather'); 
    return <CustomizationContext.Provider value={{
        meterial , setMeterial
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext((CustomizationContext));
    return context;
}