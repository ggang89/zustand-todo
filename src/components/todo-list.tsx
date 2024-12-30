import { useTodoListStore } from "../stores/todo-list-store";

const TodoList = () => {
  const { todoList, removeTodo, editBtn, handleEditTodo, doneCheck } =
    useTodoListStore();
  const enter = (e: React.KeyboardEvent<HTMLInputElement>,id:string) => {
    if (e.key === "Enter") {
     editBtn(id); }
  };
  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id} className="px-3">
          {todo.isEditing ? (
            <div className="flex gap-1">
              <input
                value={todo.todoTitle}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleEditTodo(e, todo.id)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  enter(e,todo.id)
                }
                className="flex-1"
              />
              <button
                className="border-0 rounded-md bg-slate-900 text-white font-bold px-3 py-1 hover:bg-blue-700"
                onClick={() => editBtn(todo.id)}
              >
                {" "}
                저장
              </button>
            </div>
          ) : (
            <div className="flex gap-1 border-b-2 border-gray-200 py-3 items-center justify-center ">
              <input type="checkbox" onClick={() => doneCheck(todo.id)} />
              {todo.isDone ? (
                <p className="line-through flex-1 italic">{todo.todoTitle}</p>
              ) : (
                <p className="font-semibold flex-1">{todo.todoTitle}</p>
              )}
              <button
                className="border-0 rounded-md bg-slate-900 text-white font-bold px-3 py-1 hover:bg-blue-700"
                onClick={() => editBtn(todo.id)}
              >
                수정
              </button>
              <button
                className="border-0 rounded-md bg-slate-900 text-white font-bold px-3 py-1 hover:bg-red-700"
                onClick={() => removeTodo(todo.id)}
              >
                삭제
              </button>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default TodoList;
