import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import { useTasks } from './hooks/useTasks';
import './App.css';

function App() {
  const taskManager = useTasks();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage {...taskManager} />} />
          <Route path="/task/:id" element={<TaskDetailPage {...taskManager} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

