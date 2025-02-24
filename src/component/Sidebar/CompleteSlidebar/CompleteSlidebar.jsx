
import UpperComponent from '../YouComponent/UpperComponent'
import YouComponent from '../YouComponent2/YouComponent'
import Explore from '../Explore/Explore'
import './CompleteSlidbar.css';
import { useContext } from 'react';
import OpenCloseContext from '../../../Context/OpenCloseContext/OpenCloseContext';
import SecondSlider from '../SecondSlider/SecondSlider';

export default function CompleteSlidebar() {
    const {isOpen}= useContext(OpenCloseContext);
  return (
    
       
     isOpen ?(
        <div className="CompleteSlidbarContainer">
            <UpperComponent />
            <YouComponent />
            <Explore />
        </div>
            
  ):<div className="CompleteSlidbarContainer1">
  <SecondSlider />
  </div>
   
  )
}
