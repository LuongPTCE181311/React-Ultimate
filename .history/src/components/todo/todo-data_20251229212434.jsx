/* eslint-disable react/prop-types */
const TodoData = (props) => {
  
  const {name, age, data} = props
  return (
    <div className="todo-data">
      <div>My name is {age}</div>
      <div>Learning React</div>
      <div>Learning React</div>
    </div>
  );
};

export default TodoData;
