import { createContext, useContext } from "react";
import { useState } from "react";
const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
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