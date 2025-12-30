/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList } = props;

  const handleClick = () =>{
    alert("click me")
  }
  return (
    <div className="todo-data">
      {todoList.map((name) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={`todo-item`} key={name.id}>
            <div>{name.name}</div>
            <button style={{cursor: "pointer"}} onClick={handleClick}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
