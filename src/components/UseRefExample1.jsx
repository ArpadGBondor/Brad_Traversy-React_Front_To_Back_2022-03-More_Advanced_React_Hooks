import React, { useRef } from 'react';

function useRefExample1() {
    const nameInputRef = useRef(null);
    const paragraphRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameInputRef.current.value);
        nameInputRef.current.value = 'Hello'; // keep in mind, the page won't rerender the dcomponent, like with state values
        nameInputRef.current.style.backgroundColor = 'red';
        paragraphRef.current.style.color = 'blue';
        paragraphRef.current.innerText = 'Goodbye';
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameInputRef} className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <p ref={paragraphRef} onClick={() => nameInputRef.current.focus()}>
                Hello paragraph
            </p>
        </div>
    );
}

export default useRefExample1;
