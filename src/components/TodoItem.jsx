// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.taskName);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, {
        taskName: editedName,
        description: editedDescription,
        status: todo.status
      });
    }
    setIsEditing(!isEditing);
  };

  const handleStatusChange = (e) => {
    updateTodo(todo.id, { status: e.target.value });
  };

  return (
    <div className={`todo-item ${todo.status === 'Completed' ? 'completed' : 'not-completed'}`}>
      {isEditing ? (
        <>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
        </>
      ) : (
        <>
          <p>Name: {todo.taskName}</p>
          <p>Description: {todo.description}</p>
        </>
      )}
      <select value={todo.status} onChange={handleStatusChange}>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

// Define prop types
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
