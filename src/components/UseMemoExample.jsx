import React, { useState, useEffect, useRef, useMemo } from 'react';

const useMemoExample = () => {
    const [number, setNumber] = useState(1);
    const [increment, setIncrement] = useState(0);
    const renders = useRef(1);

    // const sqrt = getSqrt(number);
    const sqrt = useMemo(() => getSqrt(number), [number]);
    // - app remembers the return value of the function, until the value of "number" changes.
    // - getSqrt() does not run on every render, only when the expected outcome is different.
    // - changing back the value of "number" to a previous value runs getSqrt() and does not
    //   give e memorised return value.

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    const handleButtonClick = (e) => {
        setIncrement((prev) => prev + 1);
    };
    return (
        <div>
            <input
                className="form-control w-25"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <h2 className="my-3">
                The sqrt of {number} is {sqrt}.
            </h2>
            <button className="btn btn-primary" onClick={handleButtonClick}>
                Re Render
            </button>
            <h3>Memo example rendered {renders.current} times.</h3>
        </div>
    );
};

function getSqrt(number) {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    console.log('Expensive Function Called!');
    return Math.sqrt(number);
}

export default useMemoExample;
