//import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";


function App() {
  // const [input, setInput] = useState();
  // const [todoList, setTodoList] = useState([]);
  

  return (
    <>
      <TodoInput />
      <ul>
        <TodoList />
      </ul>
    </>
  );
}

export default App;
