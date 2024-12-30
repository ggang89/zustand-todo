import { useTodoInputStore } from "../stores/input-store";
//import { useState } from "react";
import { useTodoListStore } from "../stores/todo-list-store";

const TodoInput = () => {
  const todo = useTodoInputStore((state) => state.todo);
  const handleInput = useTodoInputStore((state) => state.handleInput);

  //const [input, setInput] = useState("");
  const addTodoBtn = useTodoListStore((state) => state.addTodoBtn);

  const addNewTodo = (todo: string) => {
    addTodoBtn(todo);
    //setInput("");
    handleInput("");
    console.log(todo);
  };

  return (
    <div className="px-3 h-[80px] flex gap-3 items-center">
      <label htmlFor="newTodo" className="italic text-sm">
        새로운 할 일
      </label>
      <input
        id="newTodo"
        value={todo}
        type="text"
        placeholder=" 무엇을 할까요?"
        onChange={(e) => handleInput(e.target.value)}
        className="rounded-md w-3/5 h-[30px] flex-1"
      />
      <button
        className="border-0 rounded-md bg-slate-900 text-white font-bold px-3 py-1 hover:bg-gray-600"
        onClick={() => addNewTodo(todo)}
      >
        추가
      </button>
    </div>
  );
};

export default TodoInput;
