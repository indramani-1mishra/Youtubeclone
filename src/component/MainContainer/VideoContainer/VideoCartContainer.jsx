import { useEffect, useState } from 'react'
import VideoCart from '../VideoCart/VideoCart'
import axios from 'axios';

export default function VideoCartContainer() {
    const [video, setVideo] = useState([]);
    
    const getDataFromApi = async () => {
        try {
            const response = await axios.get(
                'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE'
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
