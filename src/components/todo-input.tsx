import { useRef } from "react";
//import { useTodoInputStore } from "../stores/input-store";
//import { useState } from "react";
import { useTodoListStore } from "../stores/todo-list-store";

const TodoInput = () => {
  //const todo = useTodoInputStore((state) => state.todo);
  //const handleInput = useTodoInputStore((state) => state.handleInput);
  const inputRef = useRef<HTMLInputElement>(null);

  //const [input, setInput] = useState("");
  const addTodoBtn = useTodoListStore((state) => state.addTodoBtn);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem("input") as HTMLInputElement;

    if (input.value == "") {
      alert("할 일을 입력하세요");
      inputRef.current?.focus();
      return;
    }

    addTodoBtn(input.value);

    // input 필드 값 초기화
    input.value = "";
    //inputRef.current!.value = ""; // input 필드 비우기
    //handleInput("") //으로 값이 안 지워진다!
  };

  return (
    <form onSubmit={submit}>
      <div className="px-3 h-[80px] flex gap-3 items-center">
        <label htmlFor="newTodo" className=" text-sm">
          새로운 할 일
        </label>

        <input
          name="input"
          ref={inputRef}
          id="newTodo"
          type="text"
          placeholder=" 무엇을 할까요?"
          className="placeholder:italic placeholder:text-slate-400 border border-slate-100 rounded-md h-[40px] flex-1 px-2  focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
        />
        <button
          className="h-[40px] border-0 rounded-md bg-blue-400 text-white font-bold px-3 py-1 hover:bg-blue-700"
          type="submit"
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
