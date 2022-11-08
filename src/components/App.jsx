import React, { useState } from "react";

function App() {
  //create useState hook
  const [item, setItem] = useState("");
  const [itemsArr, addItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick() {
    //update arr with prev item using spread operator and add new item into arr
    addItem((prevItems) => {
      return [...prevItems, item];
    });
    //clear the user input by setting item to empty string
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* create a new li for each item added to itemsArr */}
          {itemsArr.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
