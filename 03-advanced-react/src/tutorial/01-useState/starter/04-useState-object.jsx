import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState("Peter")
  // const [age, setAge] = useState("24")
  // const [hobby, setHobby] = useState("Read Books")

  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Read Books"
  })

  const handleClick = () => {
    // setName("John")
    // setAge("28");
    // setHobby("scream at the computer");
    setPerson({
      name: "John",
      age: 28,
      hobby: "Scream at the computer",
    });
  }

  const {name, age, hobby} = person
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>Enjoys To: {hobby}</h2>
      <button className='btn' type='button' onClick={handleClick}>Show John</button>
    </>
  );
};

export default UseStateObject;
