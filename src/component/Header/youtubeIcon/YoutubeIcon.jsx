
import { RxTextAlignJustify } from "react-icons/rx";
import './YoutubeIcon.css';

export default function YoutubeIcon() {
    const youtubeImage = "https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg";
  return (
    <div className="YoutubeIconContainer">
      <div className="iconoft">
        <RxTextAlignJustify fontSize="30px" />
      </div>
      <div className="YoutubeImageContainer">
        <img src={youtubeImage} alt=" youtube image"/>
      </div>
    </div>
  )
}
