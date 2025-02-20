
import Profile from '../Profile/Profile';
import SearchBar from '../Searchbar/SearchBar';
import YoutubeIcon from '../youtubeIcon/YoutubeIcon';
import './CompleteHeader.css';
export default function CompleHeader() {
  return (
    <div className='headerConatainer'>
      <YoutubeIcon />
      <SearchBar />
      <Profile />
    </div>
  )
}
