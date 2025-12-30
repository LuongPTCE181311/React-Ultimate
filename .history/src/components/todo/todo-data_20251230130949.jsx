/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
      {todoList.map((name, index) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={}>
            <div>{name.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
      <div>{JSON.stringify(todoList)}</div>
    </div>
  );
};

export default TodoData;
