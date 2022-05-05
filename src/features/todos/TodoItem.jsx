import { useDispatch } from "react-redux";
import { delTodo, toggleTodoComplete } from "./todoSlice";

const TodoItem = ({ id, title, complete }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => {
          dispatch(toggleTodoComplete({ id }));
        }}
      />
      <span>{title}</span>
      <span className="del-todo" onClick={() => dispatch(delTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
