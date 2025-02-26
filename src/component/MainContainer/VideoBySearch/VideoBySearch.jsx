import { useContext, useEffect, useState } from "react";
import OpenCloseContext from "../../../Context/OpenCloseContext/OpenCloseContext";
import axios from "axios";
import { api, api2 } from "../VideoCart/helperCode";
import VideoCart from "../VideoCart/VideoCart";

export default function VideoBySearch() {
    const { searchValue } = useContext(OpenCloseContext);
    const [VideoBySearch,setVideoBySearch]= useState([]);
   
    useEffect(() => {
        const getItemBySearch = async () => {
            try {
                const response = await axios.get(
                    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchValue}&key=${api2}`
                );
                console.log(response.data.items, "items");
                setVideoBySearch(response.data.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        if (searchValue) {  // Agar searchValue empty hai to API call avoid karein
            getItemBySearch();
        }
    }, [searchValue]);  // Dependency array me searchValue add karein

    return (
        <>
        {
            VideoBySearch.map((data) => (
            <VideoCart key={data?.id?.videoId} items={data} />
        ))}
        
        </>
    );
}

