import React from "react";
import { people } from "../../../data";
import avatar from "../../../assets/default-avatar.svg";

// Setting up Default value for nickName
// export function Person({name, nickName = "ShakeOrBake"})

export function Person({name, nickName, images}) {
  // const img = images[0].small.url
  
  //Before Optional Chaining
  // const img = images && images[0] && images[0].small && images[0].small.url

  // const img = images?.[0]?.small?.url ?? avatar
  const img = images?.[0]?.small?.url || avatar

  return (
    <>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      {/* <p>NickName: {nickName}</p> */}

      {/* COnditional Rendering */}
      <p>NickName: {nickName || "shakeOrBake"}</p>
    </>
  );
}
  