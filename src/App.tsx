//import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";


function App() {
  // const [input, setInput] = useState();
  // const [todoList, setTodoList] = useState([]);
  

  return (
    <div className="w-3/4 h-screen mt-10 m-auto shadow-md bg-orange-50">
      <h1 className="font-extrabold text-4xl p-6 text-center">
        ✅ 오늘의 할 일{" "}
      </h1>
      <TodoInput />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
