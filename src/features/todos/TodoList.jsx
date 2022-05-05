import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import { useGetTodo } from "../todos/todoApi";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const { data, error, isLoading } = useGetTodo();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        {error ? (
          <>error</>
        ) : isLoading ? (
          <>loading</>
        ) : data ? (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.complete} />
                <span>{todo.title}</span>
                <span className="del-todo">&times;</span>
              </li>
            ))}
          </ul>
        ) : null}
      </ul>
    </div>
  );
};

export default TodoList;
