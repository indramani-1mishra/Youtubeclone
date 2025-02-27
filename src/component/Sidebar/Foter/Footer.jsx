//import footerData from "./dataForfolder";

import { FaHome, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useContext } from "react";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";

import './Footer.css';
export default function Footer() {
 // const data = footerData();  // ✅ Custom hook ka naam change kiya
 const { ShortButton, setShortButton } = useContext(OpenCloseContext);

  return (
    <>
       <div className="FoterContainer">
        <div onClick={ ()=>
          window.location.href = "/"
          }>
        <FaHome fontSize="32px" />
        <span>home</span>
        </div>  
        <div  onClick={()=> setShortButton(!ShortButton)}>
          <SiYoutubeshorts fontSize="32px" />
          <span>shorts</span>
        </div> 
        <div  onClick={ ()=>
          window.location.href = "/"
        }>
         <FaPlusCircle fontSize="32px" />  
         <span>upload</span>
        </div> 
        <div>
          <MdSubscriptions  fontSize="32px"/>
          <span>subscriptions</span>
        </div> 
        <div>
          <FaUserCircle  fontSize="32px"/>
          <span>profile</span>
        </div> 
       </div>
          </>
        )

  
  
}
