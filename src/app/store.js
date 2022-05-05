import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { todoApi } from "../features/todos/todoApi";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
