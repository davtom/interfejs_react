import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        console.log('Button clicked!');
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Counter;