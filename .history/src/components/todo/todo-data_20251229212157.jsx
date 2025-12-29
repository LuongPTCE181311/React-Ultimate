const TodoData = (props) => {
  console.log(">>>>>> check props", props);

  return (
    <div className="todo-data">
      // eslint-disable-next-line react/prop-types
      <div>My name is {props.name}</div>
      <div>Learning React</div>
      <div>Learning React</div>
    </div>
  );
};

export default TodoData;
