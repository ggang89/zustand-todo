import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";


function App() {
  // const [input, setInput] = useState();
  // const [todoList, setTodoList] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <div className="w-[600px] h-screen mt-10 m-auto shadow-md px-5 bg-slate-50">
      <h1 className="font-extrabold text-4xl p-10 text-center">
        ✅ 오늘의 할 일{" "}
      </h1>

      <div className=" flex justify-end m-3">
        📅
        <h3 className=" mx-2 font-bold italic text-red-950">{currentTime}</h3>
      </div>
      <TodoInput />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
