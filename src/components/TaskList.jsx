import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask, toggleTaskStatus }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
