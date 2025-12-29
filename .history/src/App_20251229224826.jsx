import TodoData from "./components/todo/todo-data";
import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);

  const hoidanit = "eric";
  const age = 21;
  const data = {
    address: "baclieu",
    country: "vietnam",
  };

  const addNewTodo = (name) => {
    const newTodo = {
        id: randomIntFromInterval(),
        name: name
    }
    setTodoList([...todoList, newTodo]);
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
        <div className="todo-image">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
