
import { RxTextAlignJustify } from "react-icons/rx";
import './YoutubeIcon.css';
import { useContext } from "react";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";

export default function YoutubeIcon() {
    const youtubeImage = "https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg";
    const {isOpen,setIsOpen} =useContext(OpenCloseContext);
    const onClickHandler = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);  // for testing purpose, remove this line later.
    }
  return (
    <div className="YoutubeIconContainer">
      <div className="iconoft" onClick={onClickHandler}>
        <RxTextAlignJustify fontSize="30px" />
      </div>
      <div className="YoutubeImageContainer">
        <img src={youtubeImage} alt=" youtube image"/>
      </div>
    </div>
  )
}
