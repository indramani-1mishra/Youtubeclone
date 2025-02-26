import { FaSearch } from 'react-icons/fa';
import './Searchbar.css';
import { useContext, useEffect, useState } from 'react';
import OpenCloseContext from '../../../Context/OpenCloseContext/OpenCloseContext';
export default function SearchBar() {
  const {setSearchValue} = useContext(OpenCloseContext);
  const[value,SetValue]= useState('');

  const onchangeHandler = (e) => {
   SetValue(e.target.value);

  }
  useEffect(() => {
    let timer = setTimeout(() => setSearchValue(value), 500);
  
    return () => clearTimeout(timer); 
  }, [value]); 
  
  return (
    <div className='inputContainer'>
        <input type="text" placeholder="Search..." onChange={onchangeHandler} value={value}  />
      <button type="submit"><FaSearch fontSize="20px"  /></button>
    </div>
  )
} 
