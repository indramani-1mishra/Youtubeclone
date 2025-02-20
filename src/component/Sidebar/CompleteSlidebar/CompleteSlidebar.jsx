
import UpperComponent from '../YouComponent/UpperComponent'
import YouComponent from '../YouComponent2/YouComponent'
import Explore from '../Explore/Explore'
import './CompleteSlidbar.css';

export default function CompleteSlidebar() {
  return (
    <div className='completeSlidbarConatiner'>
      <UpperComponent />
       <YouComponent />
       <Explore />
    </div>
  )
}
