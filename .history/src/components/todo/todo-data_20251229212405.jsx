/* eslint-disable react/prop-types */
const TodoData = (props) => {
  console.log(">>>>>> check props", props);
  const {name, age, data} = props
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div>Learning React</div>
      <div>Learning React</div>
    </div>
  );
};

export default TodoData;
