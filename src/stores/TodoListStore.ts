import { create } from "zustand";
import {v4 as uuidv4} from 'uuid'
import TodoList from "../components/TodoList";

interface TodoItem {
  id: string;
  todoTitle: string;
  isEditing: boolean;
}
interface TodoList {
   Todolist:TodoItem[]
} 

interface Actions{
  addTodoBtn:(newTodo:string)=>void,
  editBtn: (TodoItem: TodoItem) => void;
 removeTodo:(TodoItem:TodoItem)=>void
}


// export const useTodoListStore = create<TodoItem & Actions>()((set) => ({
//   id:"",
//   todoTitle: "",
//   isEditing: false,
//   editBtn: (TodoItem) => set({ ...TodoItem, isEditing: true }),
//   addTodoBtn: (InputTodo) => set({ id: uuidv4(), todoTitle: InputTodo, isEditing: false })
//   // delBtn:()=>void
// }));
export const useTodoListStore = create< TodoList & Actions >()((set) => ({
  TodoList:[],
  editBtn: () => {},
  addTodoBtn: (InputText) =>
    set((state) => ({
      TodoList: [
        { id: uuidv4(), todoTitle: InputText, isEditing: false },
        ...state.TodoList,
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      TodoList: state.TodoList.filter((todo) => todo.id !== id),
    })),
}));

  