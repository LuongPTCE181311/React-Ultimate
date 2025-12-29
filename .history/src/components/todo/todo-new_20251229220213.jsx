const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addNewTodo } = props;

  const handleClick = () => {
    alert("huhuh")
  }

  const handleOnChange = (event) => {
    console.log("handleOnchange", event.target)
  }
  return (
    <div className="todo-new">
      <input type="text" onChange={handleOnChange}/>
      <button id="addBtn" onClick={handleClick} style={{cursor: "pointer"}}>Add</button>
    </div>
  );
};

export default TodoNew;
