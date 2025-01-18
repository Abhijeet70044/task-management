import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function TaskDetailPage({ tasks, updateTask, deleteTask, toggleTaskStatus }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back to tasks</Link>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Created at: {new Date(task.createdAt).toLocaleString()}</p>
      <div className="button-group">
        <button onClick={() => toggleTaskStatus(task.id)} className="btn btn-secondary">
          Toggle Status
        </button>
        <button
          onClick={() => {
            deleteTask(task.id);
            navigate('/');
          }}
          className="btn btn-danger"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskDetailPage;

