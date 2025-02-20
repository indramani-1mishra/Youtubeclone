import { BiAlarm } from "react-icons/bi";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const youdata =[

 {icon: <BiAlarm fontSize="20px" />,title:"history"},
 {icon: <RiPlayListAddLine fontSize="20px"  />,title:"playlists"},
 {icon: <MdOndemandVideo fontSize="20px" />,title:"your videos"},
 {icon: <AiFillLike fontSize="20px" />,title:"liked videos"},
 {icon: <MdOutlineFileDownload  fontSize="20px"/>,title:"download"},
 {icon: <MdOutlineWatchLater fontSize="20px" />,title:"watch later"},
]
export default youdata;