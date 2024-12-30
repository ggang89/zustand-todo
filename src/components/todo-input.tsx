//import { useTodoInputStore } from "../stores/input-store";
import { useState } from "react";
import { useTodoListStore } from "../stores/todo-list-store";

const TodoInput = () => {
  // const todo = useTodoInputStore((state) => state.todo);
  // const handleInput = useTodoInputStore((state) => state.handleInput);

  const [input, setInput] = useState("");
  const addTodoBtn = useTodoListStore((state) => state.addTodoBtn);

  
  const addNewTodo = (todo: string) => {
    addTodoBtn(todo);
    setInput("");
    console.log(todo)
  };

  return (
    <div>
      <label htmlFor="newTodo">New Todo </label>
      <input
        id="newTodo"
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addNewTodo(input)}>➕ 추가</button>
    </div>
  );
};

export default TodoInput;
