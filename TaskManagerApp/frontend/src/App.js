import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
);

export default App;
