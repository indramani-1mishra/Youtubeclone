//import footerData from "./dataForfolder";

import { FaHome, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useContext } from "react";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";

import './Footer.css';
import { Avatar } from "@mui/material";
export default function Footer() {
 // const data = footerData();  // ✅ Custom hook ka naam change kiya
 const { ShortButton, setShortButton } = useContext(OpenCloseContext);
 const profile= "https://scontent.fvns1-2.fna.fbcdn.net/v/t39.30808-6/438256407_1169122724264056_5310981140638874357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xemo5HVHSScQ7kNvgG2i2gr&_nc_oc=AdgKHjPntqI3WdrZ6a7LfdaA4VNOPlMdiVWYBsuDb0-APJXmjlgc_grqhpuJWjZZG18ObRNq0fat4bCBVf03DtpV&_nc_zt=23&_nc_ht=scontent.fvns1-2.fna&_nc_gid=AeRCKA1PZ_JB4v7VdzF76qM&oh=00_AYDcItibJQBsC6iOxxG2hv8_Vb-x2H8jkegzbnnVsbwehw&oe=67C864FF";
    

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
         {/**<FaUserCircle  fontSize="32px"/> */}
         <Avatar 
          alt="Profile Picture"
          src={profile}// ✅ Local Image now works!
          sx={{ width: 20, height: 20, cursor: "pointer" }}
        />
          <span>profile</span>
        </div> 
       </div>
          </>
        )

  
  
}
