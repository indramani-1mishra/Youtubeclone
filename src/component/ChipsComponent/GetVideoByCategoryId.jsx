import { useState, useEffect } from "react";
import { api } from "../MainContainer/VideoCart/helperCode";
import axios from "axios";
import VideoCart from "../MainContainer/VideoCart/VideoCart";


const VideoCategory = ({ categoryId }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideo = async () => {
            try {
                const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryId}&maxResults=10&regionCode=IN&key=${api}`;
                const response = await axios.get(url);
                console.log(response.data.items+' items');
                console.log("hello world");
                setVideos(response.data.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        if (categoryId) {
            getVideo();
        }
    }, [categoryId]); // categoryId jab change hoga tab API call hogi

    return (
        <>
                {videos.map((data) => (
                    <VideoCart key={data.id} items={data} />
                ))}
             
        </>
    );
};

export default VideoCategory;
