import { useTodoInputStore } from '../stores/inputStore'

const TodoInput = () => {
  const input = useTodoInputStore();

  const addNewTodo = (todo:string) => {
    input.addTodo(todo)
  }
  return (
    <div>
      <input value={input.todo} type="text" onChange={(e)=>input.addTodo(e.target.value)} />
      <button onClick={()=>addNewTodo }>➕ 추가</button>
    </div>
  );
};

export default TodoInput;
