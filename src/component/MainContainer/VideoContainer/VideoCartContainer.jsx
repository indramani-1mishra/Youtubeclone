import { useEffect, useState } from "react";
import VideoCart from "../VideoCart/VideoCart";
import axios from "axios";
import { api } from "../VideoCart/helperCode";
import Footer from "../../Sidebar/Foter/Footer";

export default function VideoCartContainer() {
    const [video, setVideo] = useState([]);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth <= 500);

    const getDataFromApi = async () => {
        try {
            const response = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${api}`
            );
            setVideo(response.data.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    useEffect(() => {
        getDataFromApi();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth <= 500);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {video.length > 0
                ? video.map((data) => <VideoCart items={data} key={data.id} />)
                : Array.from({ length: 50 }).map((_, index) => <VideoCart key={index} items={{}} />)}

            {innerWidth && <Footer />}
        </>
    );
}
