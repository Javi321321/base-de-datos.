import React, { useState, useEffect } from 'react';
import Task from '../components/Task';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <div>
            <h1>Lista de Tareas</h1>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskPage;
