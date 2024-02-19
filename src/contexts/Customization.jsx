import { createContext, useContext } from "react";
import { useState } from "react";


//Array ของสีทั้งหมดสำหรับการเปลี่ยน
export const chairColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  
export const cushionColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  

//ใช้ในการจัดการสถานะของ customization ของแอปพลิเคชัน

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    //ฟังก์ชันส่งค่าไป หน้า interface เพื่อส่งไปหา Chair (สำหรับตัว Wrap)
    const [meterial , setMeterial] = useState(''); 
    //ส่งไปหา Chair (สำหรับตัว ขา)
    const [legs , setLegs] = useState(''); //useState 1 หมายถึง ค่า default


    //สร้าง useState สำหรับการรับส่งค่า สี (1)
    const [chairColor , setChairColor] = useState(chairColors[0]);  // เข้าถึง arr [0]

    //สร้าง useState สำหรับการรับส่งค่า สี (2)
    const [cushionColor , setCushionColor] = useState(cushionColors[0]); 

    // กำหนดค่าสำหรับส่ง จากตัว useState ข้างบน
    return <CustomizationContext.Provider value={{
        meterial ,
        setMeterial,
        legs,
        setLegs ,
        chairColor , 
        setChairColor ,
        cushionColor,
        setCushionColor
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext((CustomizationContext));
    return context;
}