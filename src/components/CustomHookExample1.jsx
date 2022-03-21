import React from 'react';
import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {});

    console.log(data);

    return loading ? (
        <h2>Loading...</h2>
    ) : (
        <div>
            <h2>CustomHookExample1</h2>
            {data && data.map((post, index) => <h3 key={index}>{post.title}</h3>)}
        </div>
    );
}

export default CustomHookExample1;
