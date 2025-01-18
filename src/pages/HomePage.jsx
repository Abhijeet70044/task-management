import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskFilter from '../components/TaskFilter';

function HomePage({
  tasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
  filter,
  setFilter,
  sort,
  setSort,
  reorderTasks,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="container">
      <h1>Task Management</h1>
      <div className="controls">
        <TaskFilter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
        <button onClick={() => setIsFormOpen(true)} className="btn btn-primary">
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
        reorderTasks={reorderTasks}
      />
      {isFormOpen && (
        <TaskForm
          onSubmit={(task) => {
            addTask(task);
            setIsFormOpen(false);
          }}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

export default HomePage;

