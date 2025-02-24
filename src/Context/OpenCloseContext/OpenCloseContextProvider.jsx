import { useState } from "react";
import OpenCloseContext from "./OpenCloseContext";

export default function OpenCloseContextProvider({ children }) 
{
    const [isOpen, setIsOpen] = useState(true);
     const[IsClick, setIsClick] = useState(true);
    return (
        <OpenCloseContext.Provider value={{ isOpen, setIsOpen,IsClick,setIsClick }}>
            {children} 
        </OpenCloseContext.Provider>
    );
}
