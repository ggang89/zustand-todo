import { create } from "zustand";

interface TodoItem {
  id: number;
  todoTitle: string;
  isDone: boolean;
  isEditing: boolean;
}

interface Actions{
  editBtn: (TodoItem: TodoItem) => void;
  // delBtn:(TodoItem:TodoItem)=>void
}


export const useTodoListStore = create<TodoItem & Actions>()((set) => ({
  id: 1,
  todoTitle: "",
  isDone: false,
  isEditing: false,
  editBtn: (TodoItem) => set({ ...TodoItem, isEditing: true }),
  // delBtn:()=>void
}));