import TodoData from "./components/todo/todo-data";
import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css"
import reactLogo form './assets/'
const App = () => {

  return (
    <>
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className="todo-image">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
