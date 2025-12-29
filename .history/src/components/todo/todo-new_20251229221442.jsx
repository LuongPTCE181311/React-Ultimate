import { useState } from "react";

const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { addNewTodo } = props;

  const [valueInputy, setValueInput] = useState("");

  const handleClick = () => {
    alert("huhuh");
  };

  const handleOnChange = (name) => {
    console.log("handleOnchange", name);
  };
  return (
    <div className="todo-new">
      <input type="text" onChange={(event) => {handleOnChange(event.target.value)}} />
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
