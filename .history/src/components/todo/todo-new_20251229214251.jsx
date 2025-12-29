const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addNewTodo } = props;
  addNewTodo(eric);
  return (
    <div className="todo-new">
      <input type="text" />
      <button id="addBtn">Add</button>
    </div>
  );
};

export default TodoNew;
