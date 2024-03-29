import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="mx-auto w-full items-center text-center">
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
