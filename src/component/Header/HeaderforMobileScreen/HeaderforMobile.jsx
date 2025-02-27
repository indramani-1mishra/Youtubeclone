import { useState } from 'react';
import './HeaderForMobile.css';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSearchOutline } from "react-icons/io5";
import { MdConnectedTv } from "react-icons/md";
import SearchBar from '../Searchbar/SearchBar';

import { FaArrowLeft } from "react-icons/fa6";
import { FaMicrophone } from 'react-icons/fa';

export default function HeaderForMobile() {
    const youtubeImage = "https://abdulla-youtube-clone.vercel.app/assets/yt-logo-DzwK7Zh0.png";
    const [isTouch, SetTouch] = useState(true);

    const onclickHandler = () => {
        window.location.reload();
    }

    const onTouchHandler = () => {
        SetTouch(false);
    }
    const closeSearchBar=()=>
    {
        SetTouch(true);
    }

    return (
        <div className='HeaderContainerForMobile'>
            {isTouch ? (
                <>
                    <div className="YoutubeImageContainer2" onTouchStart={onclickHandler}>
                        <img src={youtubeImage} alt="youtube image" />
                    </div>
                    <div className='Containerforsmall'>
                        <div className="notificationConatainer2">
                            <IoMdNotificationsOutline fontSize="30px" />
                        </div>
                        <div className="notificationConatainer2">
                            <MdConnectedTv fontSize="30px" />
                        </div>
                        <div className="notificationConatainer2" onTouchStart={onTouchHandler}>
                            <IoSearchOutline fontSize="30px" />
                        </div>
                    </div>
                </>
            ) : (
                <div className='searchbar3'>
                <FaArrowLeft fontSize="32px" onClick={closeSearchBar} color='gray' />
                <SearchBar />
                <FaMicrophone fontSize="32px"  color='gray'/>

                </div>
            )}
        </div>
    );
}
