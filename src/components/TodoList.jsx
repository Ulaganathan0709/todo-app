// eslint-disable-next-line no-unused-vars
import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';  // Ensure PropTypes is imported

function TodoList({ todos, setTodos }) {
  const updateTodo = (id, updatedFields) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedFields } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

// Define PropTypes for the TodoList component
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  setTodos: PropTypes.func.isRequired
};

export default TodoList;
