import TodoNew from "./components/todo/todo-new";
import "./components/todo/todo.css"
const App = () => {

  return (
    <>
      <div className="toto-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
      </div>
    </>
  );
}

export default App;
