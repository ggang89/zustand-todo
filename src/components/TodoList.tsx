import { useTodoListStore } from "../stores/TodoListStore";


const TodoList = () => {
  const { id, todoTitle, isEditing, editBtn } = useTodoListStore();
  return (
    <div>
      {isEditing ? (
        <div>
          <input>{todoTitle}</input>
          <button> 저장</button>
        </div>
      ) : (
        <li>
          
          <p>{todoTitle}</p>
          <button> 수정 </button>
          <button> 삭제 </button>
        </li>
      )}
    </div>
  );
}

export default TodoList