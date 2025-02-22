import { Avatar } from "@mui/material";
import './VideoCart.css';
import formatViews from "./helperCode";
import { useEffect, useState } from "react";
import axios from "axios";
export default function VideoCart({items}) {
    const [titleIcon, subtitleIcon] = useState();

    const getTitleIcon = async ()=>
    {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${items.snippet.channelId}&key=AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE`);
        console.log(response.data.items[0].snippet.thumbnails.high.url);
        subtitleIcon(response.data.items[0].snippet.thumbnails.high.url);
    }

    useEffect(()=>
    {
        getTitleIcon();
    },[]);
  return (
    <>
      <div className="VideoCartContainer">
        <div className="VideoCartImage">
            <img src={items.snippet.thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div className="VideoCartTitle">
        <div className="logo">
        <Avatar 
          alt="Profile Picture"
          src={titleIcon}
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />
        </div>
        <div className="VideoCartTitle2">
            <p>{items.snippet.title}</p>
        </div>
        </div>
        <div className="VideoCartDuration">
            <p>{items.snippet.channelTitle}</p>
        </div>
        <div className="VideoCartDuration">
  <span>{formatViews(items.statistics.viewCount)} views</span>
  <span>23 min ago</span>
      </div>
    </div>
    </>
  )
}
