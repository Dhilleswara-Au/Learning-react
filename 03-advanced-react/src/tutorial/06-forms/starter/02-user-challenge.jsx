import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name) return
    
    const fakeId = Date.now()
    console.log(fakeId);
    
    // const newUser = {id: fakeId, name: name}
    const newUser = {id: fakeId, name}

    const updatedUser = [...user, newUser]
    setUser(updatedUser)
    setName('')
  };

  const removeUser = (id) => {
    const updatedUsers = user.filter((person) => person.id !== id);
    setUser(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      {user.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
