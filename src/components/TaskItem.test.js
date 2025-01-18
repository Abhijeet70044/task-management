import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TaskItem from './TaskItem';

const mockTask = {
  id: '1',
  title: 'Test Task',
  description: 'This is a test task',
  status: 'incomplete',
  priority: 'medium',
  createdAt: new Date().toISOString(),
};

const mockUpdateTask = jest.fn();
const mockDeleteTask = jest.fn();
const mockToggleTaskStatus = jest.fn();

const renderTaskItem = () => {
  render(
    <BrowserRouter>
      <TaskItem
        task={mockTask}
        updateTask={mockUpdateTask}
        deleteTask={mockDeleteTask}
        toggleTaskStatus={mockToggleTaskStatus}
      />
    </BrowserRouter>
  );
};

describe('TaskItem', () => {
  test('renders task title and priority', () => {
    renderTaskItem();
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Priority: medium')).toBeInTheDocument();
  });

  test('calls toggleTaskStatus when status button is clicked', () => {
    renderTaskItem();
    fireEvent.click(screen.getByText('Incomplete'));
    expect(mockToggleTaskStatus).toHaveBeenCalledWith('1');
  });

  test('calls deleteTask when delete button is clicked', () => {
    renderTaskItem();
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDeleteTask).toHaveBeenCalledWith('1');
  });
});

