import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/todo-list";

interface TodoItem {
  id: string;
  todoTitle: string;
  isEditing: boolean;
  isDone: boolean;
}
type TodoList = {
  todoList: TodoItem[];
};

interface Actions {
  addTodoBtn: (newTodo: string) => void;
  editBtn: (todoItemID: string) => void;
  removeTodo: (todoItemID: string) => void;
  handleEditTodo: (
    e: React.ChangeEvent<HTMLInputElement>,
    todoItemID: string
  ) => void;
  doneCheck: (todoItemID:string) => void;
}

export const useTodoListStore = create<TodoList & Actions>()((set) => ({
  todoList: [],
  doneCheck: (todoItemID) =>
    set((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === todoItemID) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      }),
    })),
  handleEditTodo: (e, todoItemID) =>
    set((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === todoItemID) {
          return { ...todo, todoTitle: e.target.value };
        } else {
          return todo;
        }
      }),
    })),
  editBtn: (todoItemID) =>
    set((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === todoItemID) {
          return { ...todo, isEditing: !todo.isEditing };
        } else {
          return todo;
        }
      }),
    })),
  addTodoBtn: (InputText) =>
    set((state) => ({
      todoList: [
        ...state.todoList,
        { id: uuidv4(), todoTitle: InputText, isEditing: false, isDone: false },
      ],
    })),
  removeTodo: (todoItemID) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== todoItemID),
    })),
}));
