import React, { useState, useEffect, useRef, useCallback } from 'react';

import TaskButton from './TaskButton';

function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task']);
    }, [setTasks]);

    return (
        <div>
            <TaskButton addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    );
}

export default UseCallbackExample;
