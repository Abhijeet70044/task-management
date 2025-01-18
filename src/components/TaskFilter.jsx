import React from 'react';

function TaskFilter({ filter, setFilter, sort, setSort }) {
  return (
    <div className="task-filter">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="sort-select"
      >
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
}

export default TaskFilter;

