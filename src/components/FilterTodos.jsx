// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function FilterTodos({ currentFilter, setFilter }) {
  return (
    <div className="filter-todos">
      <select value={currentFilter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
}

// Define prop types for FilterTodos component
FilterTodos.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default FilterTodos;
