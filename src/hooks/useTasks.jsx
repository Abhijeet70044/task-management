import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'completed' ? 'incomplete' : 'completed' } 
        : task
    ));
  };

  const reorderTasks = (startIndex, endIndex) => {
    const result = Array.from(tasks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTasks(result);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'date') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      const priorityOrder = { low: 0, medium: 1, high: 2 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
  });

  return {
    tasks: sortedTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    filter,
    setFilter,
    sort,
    setSort,
    reorderTasks,
  };
}

