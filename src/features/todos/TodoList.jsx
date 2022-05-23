// import { useSelector } from "react-redux";
// import TodoItem from "./TodoItem";

import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useChangesCheckTodoMutation,
} from "../todos/todoApi";

const TodoList = () => {
  // const todos = useSelector((state) => state.todos.todos);
  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [changeCheck] = useChangesCheckTodoMutation();

  const handleChange = (data) => {
    changeCheck(data);
  };

  return (
    <div>
      <ul>
        {/* {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))} */}
        {error ? (
          <>error</>
        ) : isLoading ? (
          <>loading</>
        ) : data ? (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.complete || ""}
                  onChange={() => {
                    handleChange(todo);
                  }}
                />
                <span>{todo.title}</span>
                <span
                  className="del-todo"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </ul>
    </div>
  );
};

export default TodoList;
