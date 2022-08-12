import React from "react";

export const TodoForm = ({ addTodo, title, settitle }) => {
  console.log("TodoForm rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
  };

  return (
    <>
      <form className='todo-form'>
        <input
          type='text'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
};
