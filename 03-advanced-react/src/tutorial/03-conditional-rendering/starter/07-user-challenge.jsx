import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null)

  const logIn = () => {
    setUser({name: "Hari"})
  }
  const logOut = () => {
    setUser(null)
  }

  return (
    <>
      <h2>user challenge</h2>
      {
        user ?
          <div>
            <h4>Hello There, {user.name}</h4> 
            <button onClick={logOut}>Logout</button> 
          </div> :
          <div>
            <h4>Please LogIn</h4>
            <button onClick={logIn}>Login</button>
          </div>
      }
    </>
  );
};

export default UserChallenge;
