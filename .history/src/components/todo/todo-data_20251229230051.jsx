/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
        {todoList.map((name) => {
            return(<div>${name.name}</div>)
        })}
      <div>{JSON.stringify(todoList)}</div>
    </div>
  );
};

export default TodoData;
