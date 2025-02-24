import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import axios from "axios";
import SlideCard from "./SlideSearch/SlideCard/SlideCard";
import { FaDownload, FaShare } from "react-icons/fa";
import { formatViews } from "../MainContainer/VideoCart/helperCode";

export default function DisPlayVideo() {
  const [videoId, setVideoId] = useState("");
  const [searchParams] = useSearchParams();
  const [channelId, setChannelID] = useState("");
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE`
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
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE`
      );
      setChannelDetails(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      getVideoDetails();
    }
  }, [videoId]);

  useEffect(() => {
    if (channelId) {
      getChannelDetails();
    }
  }, [channelId]);

  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      minHeight: "100vh",
      backgroundColor: "#181818",
      color: "#fff",
      position: "fixed",
      height: "100%",
      width: isMobile ? "100%" : "89%",
      overflowX: "hidden",
      overflowY: "scroll"
    }}>
      
      {/* Left Side: Video Player & Details */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: isMobile ? "100%" : "60%"
      }}>
        
        {/* Video Player */}
        <div style={{ width: "100%", maxWidth: "900px", marginBottom: "20px" }}>
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
                borderRadius: "12px",
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)"
              }}
            ></iframe>
          ) : (
            <p>Loading video...</p>
          )}
        </div>

        {/* Video Title */}
        <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
          {videoDetails?.title || "Loading title..."}
        </p>

        {/* Channel Details */}
        <div style={{
          width: "97%",
          maxWidth: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "space-between",
          marginTop: "10px",
          flexDirection: isMobile ? "column" : "row"
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

        {/* Video Description */}
        <div style={{
          width: "90%",
          maxWidth: "900px",
          marginTop: "20px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#282828"
        }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Description</p>
          <p style={{ fontSize: "14px", color: "#aaa", lineHeight: "1.6" }}>
            {videoDetails?.description || "No description available"}
          </p>
        </div>
      </div>

      {/* Right Side: Recommended Videos */}
      <div style={{
        width: isMobile ? "100%" : "40%",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}>
        <SlideCard />
      </div>
    </div>
  );
}
