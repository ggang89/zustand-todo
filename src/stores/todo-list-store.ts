import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/todo-list";

interface TodoItem {
  id: string;
  todoTitle: string;
  isEditing: boolean;
}
type TodoList = {
  todoList: TodoItem[];
};

interface Actions {
  addTodoBtn: (newTodo: string) => void;
  editBtn: (TodoItem: TodoItem) => void;
  removeTodo: (TodoItem: TodoItem) => void;
}

export const useTodoListStore = create<TodoList & Actions>()((set) => ({
  todoList: [],
  editBtn: () => {},
  addTodoBtn: (InputText) =>
    set((state) => ({
      todoList: [
        { id: uuidv4(), todoTitle: InputText, isEditing: false },
        ...state.todoList,
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
  editBtn: (id) => set(),
}));
