import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from "@mui/material";
import './Profile.css';
export default function Profile() {
    
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
          src="raj.JPG"// ✅ Local Image now works!
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
