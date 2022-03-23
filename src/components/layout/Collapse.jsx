import React from 'react';

function Collapse({ children, cID, title }) {
    return (
        <>
            <p>
                <button
                    className="btn btn-info w-100 text-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${cID}`}
                    aria-expanded="false"
                    aria-controls={cID}
                >
                    {title}
                </button>
            </p>
            <div className="collapse" id={cID}>
                <div className="card card-body">{children}</div>
            </div>
        </>
    );
}

export default Collapse;
