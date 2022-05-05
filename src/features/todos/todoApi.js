import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todos/`,
    }),
  }),
});

console.log(todoApi);

export const { useGetTodo } = todoApi;
