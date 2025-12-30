import TodoData from "./components/todo/todo-data";
import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleDelete = (id) => {
    alert(id);
  }

  return (
    <>
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length === 0 && (
          <div className="todo-image">
            <img src={reactLogo} alt="" className="logo" />
          </div>
        )}
        {todoList.length > 0 && <TodoData todoList={todoList} ha/>}
      </div>
    </>
  );
};

export default App;
