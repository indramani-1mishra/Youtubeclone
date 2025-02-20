
import './UpperComponent.css';
export default function ReusebleComponet({items}) {

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="IconTitileContainer">
          <div className="IconConatainer1">{item.icon}</div>
          <div className="titleContainer2">{item.title}</div>
        </div>

      ))}
    </>
  );
}
