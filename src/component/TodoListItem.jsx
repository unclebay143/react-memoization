import React from "react";

export const TodoListItem = ({ item, handleCompleted, trashTodo }) => {
  console.log("TodoListItem component rendered");

  const { id, title, completed } = item;
  const [trashing, settrashing] = React.useState(false);

  return (
    <div className={`${trashing && "trashing"}`}>
      <li className='todo-list-item'>
        <input
          type='checkbox'
          className='todo-checkbox'
          checked={completed}
          onChange={() => handleCompleted(id)}
        />
        <p className={`todo-title  ${completed && "completed"}`}>{title}</p>
        <button
          className='todo-trash'
          onClick={() => {
            settrashing(true);
            setTimeout(() => {
              trashTodo(id);
              settrashing(false);
            }, 500);
          }}
        >
          x
        </button>
      </li>
    </div>
  );
};
