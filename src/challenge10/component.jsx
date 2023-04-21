import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// TodoList component
function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// TodoForm component
function TodoForm({ onSubmitNewTodo }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitNewTodo(newTodoText);
    setNewTodoText('');
  };

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

// TodoApp component
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddNewTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text: text }
    ]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      <TodoForm onSubmitNewTodo={handleAddNewTodo} />
    </div>
  );
}

      
      
export default component
