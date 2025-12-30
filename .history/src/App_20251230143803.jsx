import TodoData from "./components/todo/todo-data";
import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const TodoApp = () => {
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
    const newDeleteTodo = todoList.filter((value) => value.id !== id);
    setTodoList(newDeleteTodo);
  };

  return
};
const App = () => {
  

  return (
    <>
      <Header />
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length === 0 && (
          <div className="todo-image">
            <img src={reactLogo} alt="" className="logo" />
          </div>
        )}
        {todoList.length > 0 && (
          <TodoData todoList={todoList} handleDelete={handleDelete} />
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
