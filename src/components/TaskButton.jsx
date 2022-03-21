import React from 'react';

const TaskButton = React.memo(({ addTask }) => {
    console.log('button rendered');
    return (
        <div>
            <button className="btn btn-primary" onClick={addTask}>
                Add Task
            </button>
        </div>
    );
});

export default TaskButton;
