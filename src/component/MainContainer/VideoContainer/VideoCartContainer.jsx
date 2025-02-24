
import { useEffect, useState } from 'react'
import VideoCart from '../VideoCart/VideoCart'
import axios from 'axios';


export default function VideoCartContainer() {
    const [video,SetVideo] = useState([]);
    
  const  getDataFromApi =async()=>
  {
      const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE');
      //console.log(response.data.items);
      SetVideo(response.data.items);
  }
  useEffect(()=>
{
     getDataFromApi();
},[]);

  return (
    <>
      
      {
       video.map((data)=> <VideoCart  items={data} key={data.id}/>)
      }
      
           
    </>
  )
}
