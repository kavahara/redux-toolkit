import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        complete: false,
      });
    },
    delTodo(state, action) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodo.complete = !toggleTodo.complete;
    },
  },
});

export const { addTodo, delTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
