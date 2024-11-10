import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearAll = () => {
    setPeople([])
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h1>{name}</h1>
            <button onClick={() => handleRemove(id)} type="button">
              Remove
            </button>
            <br />
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: "2rem" }} onClick={clearAll}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
