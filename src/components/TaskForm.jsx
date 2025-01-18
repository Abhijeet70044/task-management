import React, { useState } from 'react';

function TaskForm({ onSubmit, onCancel, initialTask }) {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [priority, setPriority] = useState(initialTask?.priority || 'medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      priority,
      status: initialTask?.status || 'incomplete',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {initialTask ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

