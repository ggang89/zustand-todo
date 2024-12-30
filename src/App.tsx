//import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";


function App() {
  // const [input, setInput] = useState();
  // const [todoList, setTodoList] = useState([]);
  

  return (
    <>
      <h1 className="font-extrabold text-4xl">할 일 </h1>
      <TodoInput />
      <ul>
        <TodoList />
      </ul>
    </>
  );
}

export default App;
