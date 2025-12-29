/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
      {todoList.map((name) => {
        // eslint-disable-next-line react/jsx-key
        return <div>
            {name.name}
            <button></button>
        </div>;
      })}
      <div>{JSON.stringify(todoList)}</div>
    </div>
  );
};

export default TodoData;
