import axios from "axios";
import { useEffect, useState } from "react";
import { api2, formatViews } from "../../../MainContainer/VideoCart/helperCode";
import './SlideCard.css';
import { Link } from "react-router-dom";
export default function SlideCard() {
const api ="AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE";

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${api}`;
  const [details,SetDetails] = useState([]);
  const getResponse = async()=>
  {
      const response = await axios.get(url);
      console.log(response.data.items);
      SetDetails(response.data.items);
  }
  useEffect(()=>
  {
      getResponse();
  },[]);



  return (
    <div className="AllSlideContainer">
      {details.map((item)=>
      <div key={item.id} className="containerSlideVideo">
       <Link to={`/watch?id=${item.id}`}>
       <div className="containerSlideVideo1" >
       <img src={item.snippet.thumbnails.medium.url} alt="thumbnail"/>
       </div>
       </Link>
      <div className="titel3">
      <p>{item.snippet.title}</p>
        <p className="t">{item.snippet.channelTitle}</p>
       
        <span>{formatViews(item.statistics.viewCount)} views</span>
          <span>1 month ago</span>
      </div>
       
       
      </div>
      )}
    </div>
  )
}
