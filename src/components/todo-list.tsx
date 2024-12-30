import { useTodoListStore } from "../stores/todo-list-store";

const TodoList = () => {
  const { todoList, removeTodo, editBtn, handleEditTodo, doneCheck } =
    useTodoListStore();
  console.log(todoList);
  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.isEditing ? (
            <div>
              <input
                value={todo.todoTitle}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleEditTodo(e, todo.id)
                }
              />
              <button onClick={() => editBtn(todo.id)}> 저장</button>
            </div>
          ) : (
            <div>
              <input type="checkbox" onClick={() => doneCheck(todo.id)} />
              {todo.isDone ? (
                <p className="line-through">{todo.todoTitle}</p>
              ) : (
                <p>{todo.todoTitle}</p>
              )}
              <button onClick={() => editBtn(todo.id)}> 수정 </button>
              <button onClick={() => removeTodo(todo.id)}> 삭제 </button>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default TodoList;
