import { create } from "zustand";

interface TodoState {
  todo: string;
  addTodo: (todo:string) => void;
}

export const useTodoInputStore = create<TodoState>()((set) => ({
  todo: "",
  addTodo: (input: string) => set({ todo: input }),
}));
 