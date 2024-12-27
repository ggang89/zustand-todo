import { useTodoInputStore } from '../stores/input-store'
//import { useTodoListStore } from '../stores/TodoListStore';

const TodoInput = () => {
  const todo = useTodoInputStore(state=>state.todo);
  const handleInput = useTodoInputStore((state) => state.handleInput);
  //const addTodoBtn=useTodoListStore((state)=>state.addTodoBtn)

  // const addNewTodo = (todo:string) => {
  //   // todoList에 어떻게 추가하지?
  //   handleInput(todo);
  // }
  return (
    <div>
      <input
        value={todo}
        type="text"
        onChange={(e) => handleInput(e.target.value)}
      />
      {/* <button onClick={() => addTodoBtn}>➕ 추가</button> */}
    </div>
  );
};

export default TodoInput;
