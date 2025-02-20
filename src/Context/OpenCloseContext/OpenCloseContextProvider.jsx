import { useState } from "react";
import OpenCloseContext from "./OpenCloseContext";

export default function OpenCloseContextProvider({ children }) 
{
    const [isOpen, setIsOpen] = useState(true);

    return (
        <OpenCloseContext.Provider value={{ isOpen, setIsOpen }}>
            {children} 
        </OpenCloseContext.Provider>
    );
}
