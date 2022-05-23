import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => "todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: build.mutation({
      query(body) {
        return {
          url: `todos`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: build.mutation({
      query(id) {
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Todos", id }],
    }),
    changesCheckTodo: build.mutation({
      query(data) {
        const { id, ...body } = data;
        body.complete = !body.complete;
        return {
          url: `todos/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Todos", id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangesCheckTodoMutation,
} = todoApi;
