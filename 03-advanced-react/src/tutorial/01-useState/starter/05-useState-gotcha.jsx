import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // here values are not changed synchronously
    // setTimeout(() => {
    //   console.log("clicked");
    //   setValue(value+1)
    // }, 3000)


    setTimeout(() => {
      console.log("Button Clicked"); 
      setValue((currentValue) => {
        return currentValue = currentValue + 1
      })
    }, 1000)
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
