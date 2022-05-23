import React, { useState } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Todos from "./features/todos/Todos";
// import { addTodo } from "./features/todos/todoSlice";
// import { useDispatch } from "react-redux";
import TodoList from "./features/todos/TodoList";
import { useAddTodoMutation } from "./features/todos/todoApi";

function App() {
  const [title, setTitle] = useState();
  // const dispatch = useDispatch();
  const [addTodo] = useAddTodoMutation();

  const addTask = () => {
    if (title.trim()) {
      // dispatch(addTodo({ title }));
      let obj = {
        id: new Date().toISOString(),
        title: title,
        complete: false,
      };
      addTodo(obj);
      setTitle("");
    } else {
      setTitle("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        Todo
        <Todos title={title} handleInput={setTitle} handleSubmit={addTask} />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
