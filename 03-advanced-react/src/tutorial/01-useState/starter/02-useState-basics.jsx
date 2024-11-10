import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState("hello")[0];
  // console.log(value);
  // const handler = useState("hi")[1]
  // console.log(handler);

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }
  

  return (
    <>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={increment} type="button">increment</button>
    </>
  );
};

export default UseStateBasics;
