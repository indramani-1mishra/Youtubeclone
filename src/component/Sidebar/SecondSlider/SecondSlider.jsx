import './SecondSlider.css';
import useClosedata from "./helpercode3";
export default function SecondSlider() {
 
  const closedata = useClosedata(); 
  return (
    <>
      {closedata.map((item)=>
      {
        return(
          <>
          <div key={item.title} className="icontitleContainer">
          <div onClick={item.onClick}>{item.icon}</div>
            <div>{item.title} </div>
          </div>
         
          </>
        )

      })}
    </>
  )
}
