/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
        
      <div>Learning React</div>
      <div>{JSON.stringify(todoList)}</div>
    </div>
  );
};

export default TodoData;
