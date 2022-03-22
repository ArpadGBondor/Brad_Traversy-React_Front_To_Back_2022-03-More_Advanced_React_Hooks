import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString(),
        };

        setTasks([...tasks, taskObj]);
    };
    return (
        <form onSubmit={handleSubmit} className="w-50">
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input className="form-control" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
            {tasks.map((task) => (
                <h3 key={task.date}>{task.task}</h3>
            ))}
        </form>
    );
}

export default CustomHookExample2;
