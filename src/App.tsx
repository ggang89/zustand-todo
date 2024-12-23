//import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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
