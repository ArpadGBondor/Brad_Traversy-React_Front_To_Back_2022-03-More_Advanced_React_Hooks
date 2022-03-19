import React, { useState, useEffect, useRef } from 'react';

function Todo() {
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({});

    const isMounted = useRef(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setTodo(data);
                        setLoading(false);
                    }
                    console.log(data);
                }, 3000);
            });

        // Runs when component is unmounted
        return () => {
            console.log(123);
            isMounted.current = false;
        };
    }, []);
    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{todo.title}</h3>
        </div>
    );
}

export default Todo;
