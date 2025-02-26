import Profile from '../Profile/Profile';
import SearchBar from '../Searchbar/SearchBar';
import YoutubeIcon from '../youtubeIcon/YoutubeIcon';
import { useState, useEffect } from 'react';
import './CompleteHeader.css';
import HeaderforMobile from '../HeaderforMobileScreen/HeaderforMobile';

export default function CompleteHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='headerConatainer'>
      {isMobile ? (
        <HeaderforMobile />
      ) : (
        <>
          <YoutubeIcon />
          <SearchBar />
          <Profile />
        </>
      )}
    </div>
  );
}
