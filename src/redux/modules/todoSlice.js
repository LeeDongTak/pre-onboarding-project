import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = nanoid(10);
      state.todos = [...state.todos, { id, todo: action.payload }];
    },
    deleteTodo: (state, action) => {
      state.todos = [...state.todos.filter((x) => x.id !== action.payload)];
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
