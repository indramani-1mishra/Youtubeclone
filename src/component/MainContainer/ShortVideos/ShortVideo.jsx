import axios from 'axios';
import { useEffect, useState } from 'react'
import { api, api2 } from '../VideoCart/helperCode';
import VideoCart from '../VideoCart/VideoCart';

export default function ShortVideo() {
    const [shortVideo,SetShortVideo] = useState([]);

    
const getShortVideo= async()=>
{
const response =await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=short&key=${api}`);
SetShortVideo(response.data.items);

}
useEffect(()=>
{
    getShortVideo();
  }, [])

  return (
    <>
      {shortVideo.map((data)=><VideoCart  key={data.id} items={data}/>)}
    </>
  )
}
