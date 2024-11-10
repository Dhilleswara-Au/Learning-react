import { useState } from "react";


const ToggleChallenge = () => {

  const [isTrue, setIsTrue] = useState(false)

  const Alert = () => {
    return <div className="alert alert-danger">hello world</div>;
  };

  return (
    <>
      <h2>toggle challenge</h2>
      {isTrue && <Alert />}
      <button className="btn" onClick={() => {setIsTrue(!isTrue)}}>Toggle</button>
    </>
  );
};

export default ToggleChallenge;
