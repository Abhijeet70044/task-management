import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TaskItem({ task, updateTask, deleteTask, toggleTaskStatus }) {
  return (
    <motion.div
      className="task-item"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="task-info">
        <Link to={`/task/${task.id}`} className="task-title">
          {task.title}
        </Link>
        <p className="task-priority">Priority: {task.priority}</p>
      </div>
      <div className="task-actions">
        <button
          onClick={() => toggleTaskStatus(task.id)}
          className={`btn ${task.status === 'completed' ? 'btn-success' : 'btn-warning'}`}
        >
          {task.status === 'completed' ? 'Completed' : 'Incomplete'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default TaskItem;

