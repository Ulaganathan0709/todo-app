// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import FilterTodos from './components/FilterTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    return todo.status === filter;
  });

  const completedCount = todos.filter(todo => todo.status === 'Completed').length;
  const notCompletedCount = todos.filter(todo => todo.status === 'Not Completed').length;

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#28a745' }}>TODO APPLICATION</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>Completed: {completedCount}</p>
        <p>Not Completed: {notCompletedCount}</p>
      </div>
      <AddTodoForm onAddTodo={addTodo} />
      <FilterTodos currentFilter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
