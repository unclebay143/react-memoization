import React from "react";
import "./todo.css";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleCompleted, trashTodo }) => {
  console.log("TodoList component rendered");
  return (
    <ul className='todo-list'>
      {todos?.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            handleCompleted={handleCompleted}
            trashTodo={trashTodo}
          />
        );
      })}
    </ul>
  );
};
