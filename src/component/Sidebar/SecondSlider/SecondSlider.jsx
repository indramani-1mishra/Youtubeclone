import closedata from "./helpercode3";
import './SecondSlider.css';

export default function SecondSlider() {
  return (
    <>
      {closedata.map((item)=>
      {
        return(
          <div key={item.title} className="icontitleContainer">
          <div>{item.icon}</div>
            <div>{item.title}</div>
          </div>
        )
      })}
    </>
  )
}
