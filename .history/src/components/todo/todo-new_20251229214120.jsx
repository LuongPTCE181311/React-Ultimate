const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addNewTodo } = props;
  addNewTodo();
  return (
    <div className="todo-new">
      <input type="text" />
      <button id="add">Add</button>
    </div>
  );
};

export default TodoNew;
