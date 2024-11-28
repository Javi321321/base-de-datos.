import React from 'react';

const Task = ({ task }) => (
    <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <small>{task.status}</small>
    </div>
);

export default Task;
