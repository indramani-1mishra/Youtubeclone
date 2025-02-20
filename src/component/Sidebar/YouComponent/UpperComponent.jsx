

import ReusebleComponet from "../UpperComponet/ReusebleComponet";
import data from "../UpperComponet/Data";


export default function UpperComponent() {
  return (
    <div className="youContainer">
       <div>
         <ReusebleComponet items={data} />
       </div>
    </div>
  )
}

