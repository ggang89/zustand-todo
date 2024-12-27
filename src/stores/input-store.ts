import { create } from "zustand";

interface TodoState {
  todo: string;
  handleInput: (todo:string) => void;
}

export const useTodoInputStore = create<TodoState>()((set) => ({
  todo: "",
  handleInput: (input: string) => set({ todo: input }),
}));
 