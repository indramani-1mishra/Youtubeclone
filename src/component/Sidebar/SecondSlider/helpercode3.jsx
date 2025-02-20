 
 import { SiYoutubeshorts } from "react-icons/si";
 import { IoMdHome } from "react-icons/io";  // ✅ Sahi Import
 import { MdSubscriptions } from "react-icons/md";
 import { MdOutlineFileDownload } from "react-icons/md";
 import { FaUserCircle } from "react-icons/fa";
 

const closedata = [
    { icon: <IoMdHome  fontSize="20px"/>, title: "Home" },
    { icon: <SiYoutubeshorts fontSize="20px" />, title: "Shorts" },
    { icon: <MdSubscriptions  fontSize="20px"/>, title: "Subscriptions" },
    {icon: <MdOutlineFileDownload  fontSize="20px"/>,title:"download"},
    {icon: <FaUserCircle fontSize="20px" /> ,title:"you"},
  ];
  export default closedata;