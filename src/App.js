import React, { useState } from "react";
import "./App.css"
import ToDoLists from "./ToDoLists";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const itemsEvents = (e) => {
    setInput(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  const deleteItems = (id) => {
    
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TO-DO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemsEvents}
            value={input}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
