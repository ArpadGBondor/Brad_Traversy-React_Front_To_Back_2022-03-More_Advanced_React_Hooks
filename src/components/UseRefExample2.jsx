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
            <h1>Renders: {renders.current}</h1>
            <h2>Previous state: {prevName.current}</h2>
            <input
                type="text"
                value={name}
                className="form-control mb-3"
                onChange={(e) => setName(e.currentTarget.value)}
            />
        </div>
    );
}

export default UseRefExample2;
