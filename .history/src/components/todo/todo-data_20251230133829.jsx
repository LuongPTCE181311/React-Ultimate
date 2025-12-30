/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList, handleDelete } = props;

  const handleClick = (id) =>{
    alert(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((name) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={`todo-item`} key={name.id}>
            <div>{name.name}</div>
            <button style={{cursor: "pointer"}} onClick={() => handleClick(name.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
