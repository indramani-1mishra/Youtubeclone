import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions, MdOutlineFileDownload } from "react-icons/md";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";
import './Footer.css';

const footerData = () => {  // ✅ useClosedata2 ka naam change kiya
    const { ShortButton, setShortButton } = useContext(OpenCloseContext);
  
    return [
      {
        icon: <IoMdHome fontSize="20px" />,
        title: "Home",
        onClick: () => {
          window.location.href = "/";
        },
      },
      {
        icon: <SiYoutubeshorts fontSize="20px" />,
        title: "Shorts",
        onClick: () => {
          setShortButton(!ShortButton);
        },
      },
      {
        icon: <MdSubscriptions fontSize="20px" />,
        title: "Subscriptions",
        path: "/subscriptions",
      },
      {
        icon: <FaPlusCircle fontSize="20px" />,
        title: "Download",
        path: "/downloads",
      },
      {
        icon: <FaUserCircle fontSize="20px" />,
        title: "You",
        path: "/profile",
      },
    ];
  };
  
  export default footerData;
  