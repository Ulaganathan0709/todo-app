// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported

function AddTodoForm({ onAddTodo }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !description) return; // Prevents adding empty todos
    onAddTodo({ taskName, description }); // Passes the taskName and description up
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

// Define PropTypes
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired  // Specifies that onAddTodo must be a function
};

export default AddTodoForm;
