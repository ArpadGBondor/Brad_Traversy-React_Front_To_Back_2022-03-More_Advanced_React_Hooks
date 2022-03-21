import React, { useState, useEffect, useRef, useCallback } from 'react';

import TaskButton from './TaskButton';

function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task']);
    }, [setTasks]);
    // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
    //    - addTask only changes if the dependency has changed
    //    - React guarantees that "setState" functions (e.g: setTasks)
    //      are stable and won't change on re-renders.
    // React.memo() is used around TaskButton component
    //    - TaskButton is memorized, and only re-renders when the parameters change

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
