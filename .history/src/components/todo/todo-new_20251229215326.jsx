const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addNewTodo } = props;

  const handleClick = () => {
    alert("huhuh")
  }
  return (
    <div className="todo-new">
      <input type="text" />
      <button id="addBtn" on style={{cursor: "pointer"}}>Add</button>
    </div>
  );
};

export default TodoNew;
