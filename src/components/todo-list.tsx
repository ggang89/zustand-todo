import { useTodoListStore } from "../stores/todo-list-store";

const TodoList = () => {
  const { todoList, removeTodo, editBtn, handleEditTodo, doneCheck } =
    useTodoListStore();
  const enter = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === "Enter") {
      editBtn(id);
    }
  };
  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id} className="px-3">
          {todo.isEditing ? (
            <div className="flex gap-1 items-center border-b-2 ">
              <input
                value={todo.todoTitle}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleEditTodo(e, todo.id)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  enter(e, todo.id)
                }
                className="h-[38px] flex-1 px-3 my-3 rounded-md focus:outline-none focus:ring-2 focus: ring-red-400 font-bold italic text-gray-600"
              />
              <button
                className="h-[35px] text-sm border-0 rounded-md bg-slate-500 text-white font-bold px-2 py-1 hover:bg-gray-900"
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
                <p className=" line-through font-bold text-base text-slate-600 flex-1 italic px-2">
                  {todo.todoTitle}
                </p>
              ) : (
                <p
                  className="font-bold text-base flex-1 px-2 cursor-pointer"
                  onClick={() => editBtn(todo.id)}
                >
                  {todo.todoTitle}
                </p>
              )}
              <button
                className="h-[35px] text-sm border-0 rounded-md bg-slate-500 text-white font-bold px-2 py-1 hover:bg-gray-900"
                onClick={() => editBtn(todo.id)}
              >
                수정
              </button>
              <button
                className="h-[35px] border-0 rounded-md text-sm bg-red-400 text-white font-bold px-2 py-1 hover:bg-red-600"
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
