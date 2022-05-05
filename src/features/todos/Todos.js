import React from "react";

const Todos = ({ title, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        value={title || ""}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        placeholder="Title"
      />
      <button onClick={handleSubmit}>Add</button>
    </label>
  );
};

export default Todos;
