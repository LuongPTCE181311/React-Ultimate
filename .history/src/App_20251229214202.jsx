import TodoData from "./components/todo/todo-data";
import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
const App = () => {
  const hoidanit = "eric";
  const age = 21;
  const data = {
    address: "baclieu",
    country: "vietnam",
  };

  const addNewTodo = (name) => {
    alert(`call mee")
  }
  return (
    <>
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo}/>
        <TodoData name={hoidanit} age={age} data={data} />
        <div className="todo-image">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
