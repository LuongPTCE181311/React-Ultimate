/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const {name, addNewTodo} = props
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Learning React</div>
    </div>
  );
};

export default TodoData;
