import { FaSearch } from 'react-icons/fa';
import './Searchbar.css';
export default function SearchBar() {
  return (
    <div className='inputContainer'>
        <input type="text" placeholder="Search..." />
      <button type="submit"><FaSearch fontSize="20px"  /></button>
    </div>
  )
}
