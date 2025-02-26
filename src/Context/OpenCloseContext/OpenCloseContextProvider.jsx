import { useState } from "react";
import OpenCloseContext from "./OpenCloseContext";

export default function OpenCloseContextProvider({ children }) 
{
    const [isOpen, setIsOpen] = useState(true);
     const[IsClick, setIsClick] = useState(true);
     const [searchValue, setSearchValue] = useState('');
     const [ShortButton, setShortButton] = useState(false);
    return (
        <OpenCloseContext.Provider value={{ isOpen, setIsOpen,IsClick,setIsClick ,searchValue,setSearchValue,ShortButton,setShortButton}}>
            {children} 
        </OpenCloseContext.Provider>
    );
}
