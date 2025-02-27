import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import axios from "axios";
import SlideCard from "./SlideSearch/SlideCard/SlideCard";
//import { FaDownload, FaShare } from "react-icons/fa";
import { api, api2, formatViews } from "../MainContainer/VideoCart/helperCode";
import OpenCloseContext from "../../Context/OpenCloseContext/OpenCloseContext";
import { BsHeart } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

export default function DisPlayVideo() {
  const [videoId, setVideoId] = useState("");
  const [searchParams] = useSearchParams();
  const [channelId, setChannelID] = useState("");
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [comments,setComments] = useState([]);
  const [commentsVisibility, setCommentsVisibility] = useState(false);
  const[discriptions, setDiscriptions] = useState(false);

 const {isOpen} = useContext(OpenCloseContext);
  useEffect(() => {
    const videoId1 = searchParams.get("id");
    if (videoId1) {
      setVideoId(videoId1);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [searchParams]);

  const getVideoDetails = async () => {
    try {
      
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${api}`
      );
      const videoData = response.data.items[0].snippet;
      setChannelID(videoData.channelId);
      setVideoDetails(videoData);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const getChannelDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${api}`
      );
      setChannelDetails(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    }
  };
    const getCommentsFromAPI = async ()=>
    {
      try
      {
         const response =await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${api}`);
         console.log(response.data.items);
         setComments(response.data.items);
         console.log(videoId);
      }
      catch(error)
      {
        console.log("Error: " + error);
      }

    }
    useEffect(() => {
      getCommentsFromAPI();
    }, [videoId]);


  useEffect(() => {
    if (videoId) {
      getVideoDetails();
    }
    console.log(videoId);
  }, [videoId]);

  useEffect(() => {
    if (channelId) {
      getChannelDetails();
    }
  }, [channelId]);

  const onCommentButtonClicked =()=>
  {
      setCommentsVisibility(prev =>!prev);
  
  }
  const onDiscriptionClick=()=>
  {
    setDiscriptions(prev =>!prev);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",

      minHeight: isMobile ? "100vh" : "50px",
      backgroundColor: "#181818",
      color: "#fff",
      position: "fixed",
      height: "100%",
      width: isMobile ? "100%":(isOpen? "89%": "94%") ,
      overflowX: "hidden",
      overflowY: "scroll"
    }}>
      
      {/* Left Side: Video Player & Details */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1px",
        width: isMobile ? "100%" : "60%"
      }}>
        
        {/* Video Player */}
        <div style={{ width: "100%", maxWidth: "900px", marginBottom: "14px" }}>
          {videoId ? (
            <iframe
              width="100%"
              height={isMobile ? "250px" : "500px"}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                borderRadius: "3px",
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                
              }}
            ></iframe>
          ) : (
            <p>Loading video...</p>
          )}
        </div>

        {/* Video Title */}
        <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "3px", textAlign: "justify",wordSpacing:"1px"}}>
          {videoDetails?.title || "Loading title..."}
        </p>

        {/* Channel Details */}
        <div style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "space-between",
          marginTop: "10px",
          flexDirection: isMobile ? "row" : "row"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              alt="Channel Profile Picture"
              src={channelDetails?.snippet?.thumbnails?.default?.url || "/"}
              sx={{ width: 50, height: 50, cursor: "pointer" }}
            />
            <div>
              <p style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
                {channelDetails?.snippet?.title || "Loading..."}
              </p>
              <p style={{ fontSize: "14px", color: "#aaa", margin: 0 }}>
                {formatViews(channelDetails?.statistics?.subscriberCount) || "0"} Subscribers
              </p>
            </div>
          </div>

          <button style={{
            backgroundColor: "#cc0000",
            color: "white",
            padding: "10px 16px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: isMobile ? "10px" : "0"
          }}>
            Subscribe
          </button>
        </div>
        <div className="VideoCartDuration">
          
          <span>{channelDetails?.snippet?.channelTitle||"raj"}</span>
          <span>
{channelDetails?.statistics?.viewCount 
  ? formatViews(channelDetails.statistics.viewCount) 
  : "2.8m"} views
</span>
<span>23 min ago</span>

      </div>

        {/* Video Description */}
        <div style={{
          width: "100%",
          maxWidth: "900px",
          marginTop: isMobile? "20px" : "1px",
          marginBottom:isMobile? "0px" : "20px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#282828",
          cursor:"pointer",
        }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }} onClick={onDiscriptionClick}>{discriptions?"hide discription":"show description"}</p>
          <p style={{ fontSize: "14px", color: "#aaa", lineHeight: "1.6" ,display:discriptions? "block" : "none", }}>
            {videoDetails?.description || "No description available"}
          </p>
        </div>
        <div style={{

  width: "100%",
  
  maxWidth: "900px",
  marginTop:isMobile? "20px" : "30px",
 marginBottom:"60px",
  padding: "5px",
  borderRadius: "5px",
  backgroundColor: "#282828"
}}>
  <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: isMobile?"2px":"100px",textTransform:"capitalize", cursor:"pointer"}} onClick={onCommentButtonClicked}>{commentsVisibility?"close comments....":"open comments...."}</p>
  
  {comments.length > 0 ? (
    comments.map((comment, index) => {
      const commentData = comment.snippet.topLevelComment.snippet;
      return (
        <div key={index} style={{
         display: commentsVisibility ? "flex" : "none" ,
          alignItems: "flex-start",
          gap: "10px",
          padding: "10px",
          borderBottom: "1px solid #444",
          marginBottom: "10px"
        }}>
          {/* Profile Picture */}
          <img
            src={commentData.authorProfileImageUrl}
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />

          {/* Comment Content */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}>
              {commentData.authorDisplayName}
            </p>
            <p style={{ fontSize: "14px", color: "#aaa", margin: 0 }}>
              {commentData.textDisplay}
            </p>

            {/* Like & Reply Buttons */}
            <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
              {/* Like Button */}
              <button style={{
                background: "none",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                marginRight: "10px"
              }}>
              <AiFillLike style={{marginRight:"5px"}} />{commentData.likeCount}
              </button>

              {/* Reply Button */}
              <button style={{
                background: "none",
                border: "none",
                color: "#aaa",
                cursor: "pointer"
              }}>
                Reply
              </button>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p style={{ fontSize: "14px", color: "#aaa" }}>No comments available</p>
  )}
</div>



      </div>

      {/* Right Side: Recommended Videos */}
      <div style={{
        width: isMobile ? "100%" : "40%",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        padding: isMobile ? "0" : "20px",
        display: isMobile ? "block" : "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        
      }}>
        <SlideCard />
      </div>
    </div>
  );
}
