import './HeaderForMobile.css';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSearchOutline } from "react-icons/io5";
import { MdConnectedTv } from "react-icons/md";
export default function HeaderforMobile() {
    const youtubeImage = "https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg";
  return (
    <div className='HeaderContainerForMobile'>
      <div className="YoutubeImageContainer2">
        <img src={youtubeImage} alt=" youtube image"/>
      </div>
      <div className='Containerforsmall'>
       <div className="notificationConatainer2">
            <IoMdNotificationsOutline fontSize="30px" />
            </div>
            <div className="notificationConatainer2">
            <MdConnectedTv  fontSize="30px" />
            </div>
            <div className="notificationConatainer2">
            <IoSearchOutline  fontSize="30px" />
            </div>
</div>
    </div>
  )
}
