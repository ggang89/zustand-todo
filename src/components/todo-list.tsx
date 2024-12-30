import { useTodoListStore } from "../stores/todo-list-store";

const TodoList = () => {
 const { todoList, removeTodo, editBtn } = useTodoListStore();
  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.isEditing ? (
            <div>
              <input>{todo.todoTitle}</input>
              <button onClick={() => editBtn(todo.id)}> 저장</button>
            </div>
          ) : (
            <div>
              <p>{todo.todoTitle}</p>
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
