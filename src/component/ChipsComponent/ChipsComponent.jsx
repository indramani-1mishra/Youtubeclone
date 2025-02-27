import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Chip.css';
import VideoCartContainer from '../MainContainer/VideoContainer/VideoCartContainer';
import { useContext, useEffect, useState } from 'react';
import OpenCloseContext from '../../Context/OpenCloseContext/OpenCloseContext';
import DisPlayVideo from '../DisplayVideo/DisPlayVideo';
import { Route, Routes } from 'react-router-dom';
import { api, api2 } from '../MainContainer/VideoCart/helperCode';
import axios from 'axios';
import VideoCategory from './GetVideoByCategoryId';
import VideoBySearch from '../MainContainer/VideoBySearch/VideoBySearch';
import ShortVideo from '../MainContainer/ShortVideos/ShortVideo';
//import VideoCart from '../MainContainer/VideoCart/VideoCart';

export default function ClickableChips() {
  const { IsClick, setIsClick,isOpen} = useContext(OpenCloseContext);
  const [Categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {searchValue,ShortButton} = useContext(OpenCloseContext);
  // YouTube API se categories fetch karo
  
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${api}`
        );
        setCategories(response.data.items);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  // Back button press hone par state toggle ho
  useEffect(() => {
    const handleBack = () => {
      setIsClick(prev => !prev);
    };

    window.addEventListener("popstate", handleBack);
    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [setIsClick]);

  return (
    <div className={`${isOpen ? "main" : "not"}`}>
      {IsClick ? (
        <>
          <div className="chipsContainer">
            <Stack direction="row" spacing={1}>
              {Categories.map(category => (
                <Chip
                  label={category.snippet.title}
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)} // ✅ Ab state update hogi
                />
              ))}
            </Stack>
          </div>

          
          <div className={`${isOpen ? "data-from-Youtube" : "data-from-Youtube1"}`}>
            {selectedCategory ? (
              <VideoCategory categoryId={selectedCategory} />
            ) :searchValue ? (
              <VideoBySearch />
            ):ShortButton?(<ShortVideo/>):
            (<VideoCartContainer />)}
          </div>
        </>
      ) : (
        <Routes> 
          <Route path="/watch" element={<DisPlayVideo />} />
         
        {/**  <Route path="/" element={<VideoCartContainer />} /> */}
         
        </Routes>
      )}
    </div>
  );
}
