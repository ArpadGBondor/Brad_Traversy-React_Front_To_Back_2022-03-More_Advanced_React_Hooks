import React, { useState, useEffect, useRef } from 'react';

function UseRefExample2() {
    const [name, setName] = useState('');
    const renders = useRef(1);
    const prevName = useRef(null);

    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;
    }, [name]);
    return (
        <div>
            <input
                type="text"
                value={name}
                className="form-control mb-3"
                onChange={(e) => setName(e.currentTarget.value)}
            />
            <h2>Previous state: {prevName.current}</h2>
            <h3>useRef example 2 rendered: {renders.current} times</h3>
        </div>
    );
}

export default UseRefExample2;
