import { Avatar } from "@mui/material";
import './VideoCart.css';
import {api, api2, formatViews} from "./helperCode";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";
const image= 'https://cdn.kwork.com/pics/t3/99/23740040-1669138399.jpg';

import { useContext } from "react";
export default function VideoCart({items}) {
    const [titleIcon, subtitleIcon] = useState();
  const {IsClick,setIsClick} = useContext(OpenCloseContext);
  
    const getTitleIcon = async ()=>
    {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${items.snippet.channelId}&key=${api}`);
       
        subtitleIcon(response.data.items[0].snippet.thumbnails.high.url);
    }

    useEffect(()=>
    {
        getTitleIcon();
    },[]);

   

    
 const onClickHandler =()=>
    {
      
      // alert("hello world!");
      setIsClick(!IsClick); 
      // console.log(IsClick);
     
    }
  return (
    <>
      <div className="VideoCartContainer" onClick={onClickHandler}>
      <Link to={`/watch?id=${items?.id?.videoId? items?.id?.videoId:items?.id}`}>
        <div className="VideoCartImage">
        <img src={items?.snippet?.thumbnails?.medium?.url || image} alt="thumbnail" />

        </div>
        </Link>
        <div className="VideoCartTitle">
        <div className="logo">
        <Avatar 
          alt="Profile Picture"
          src={titleIcon}
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />
        </div>
     <div className="VideoCartTitle2">
            <p>{items?.snippet?.title ||"raj mishra"}</p>
        </div> 
        </div>
        <div className="VideoCartDuration">
          
            <span>{items?.snippet?.channelTitle||"raj"}</span>
            <span>
  {items?.statistics?.viewCount 
    ? formatViews(items.statistics.viewCount) 
    : "2.8m"} views
</span>
 <span>23 min ago</span>

        </div>
      {/**  <div className="VideoCartDuration"></div> */}
    </div>
    </>
  )
}
