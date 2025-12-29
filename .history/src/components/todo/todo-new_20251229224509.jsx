import { useState } from "react";

const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { addNewTodo } = props;

  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    const newTodo {
        
    }
    addNewTodo(valueInput);
  };
 
  return (
    <div className="todo-new">
      <input type="text" onChange={(event) => {setValueInput(event.target.value)}} />
      <button id="addBtn" onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
      <div>
        My text input is = {valueInput}
      </div>
    </div>
  );
};

export default TodoNew;
