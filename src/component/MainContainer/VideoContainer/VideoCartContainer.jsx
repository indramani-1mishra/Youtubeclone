import { useEffect, useState } from 'react'
import VideoCart from '../VideoCart/VideoCart'
import axios from 'axios';
import { api, api2 } from '../VideoCart/helperCode';

export default function VideoCartContainer() {
    const [video, setVideo] = useState([]);
     api2
    const getDataFromApi = async () => {
        try {
            const response = await axios.get(
                 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${api2}`

            );
            setVideo(response.data.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (
        <>
            {video && video.length > 0 ? (
                video.map((data) => <VideoCart items={data} key={data.id} />)
            ) : (
              Array.from({ length: 50 }).map((_, index) => <VideoCart key={index} />)
            )}
        </>
    );
}
