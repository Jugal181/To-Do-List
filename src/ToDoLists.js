import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          <button
            className="deleteBtn"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            &times;
          </button>
          &nbsp;{props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoLists;
