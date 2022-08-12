import { useState } from "react";
import { TodoList } from "./component/TodoList";
import { TodoForm } from "./component/TodoForm";

function App() {
  const [todos, settodos] = useState([]);
  const [title, settitle] = useState("");

  console.log(`App component rendered`);

  // Add a new todo
  const addTodo = (title) => {
    const newTodo = { title, completed: false, id: todos.length + 1 };
    settodos([newTodo, ...todos]);

    // clear form
    settitle("");
  };

  // Toggle a todo as completed
  const handleCompleted = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Delete a todo
  const trashTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='todo-container'>
      <div className='header'>
        <h2>Todo List App</h2>
      </div>
      <TodoForm title={title} settitle={settitle} addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        trashTodo={trashTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
