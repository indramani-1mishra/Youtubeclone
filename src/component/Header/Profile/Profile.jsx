import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from "@mui/material";
import './Profile.css';
export default function Profile() {
  const profile= "https://scontent.fvns1-2.fna.fbcdn.net/v/t39.30808-6/438256407_1169122724264056_5310981140638874357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xemo5HVHSScQ7kNvgG2i2gr&_nc_oc=AdgKHjPntqI3WdrZ6a7LfdaA4VNOPlMdiVWYBsuDb0-APJXmjlgc_grqhpuJWjZZG18ObRNq0fat4bCBVf03DtpV&_nc_zt=23&_nc_ht=scontent.fvns1-2.fna&_nc_gid=AeRCKA1PZ_JB4v7VdzF76qM&oh=00_AYDcItibJQBsC6iOxxG2hv8_Vb-x2H8jkegzbnnVsbwehw&oe=67C864FF";
    
  return (
    <div className="ProfileIconContainer">
      <div className="createContainer">
        <p><FaPlus /></p>
        <p>Create</p>
      </div>
      <div className="notificationConatainer">
      <IoMdNotificationsOutline fontSize="30px" />
      </div>
      <div className="ProfileImageConatainer">
        <Avatar 
          alt="Profile Picture"
          src={profile}// ✅ Local Image now works!
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
