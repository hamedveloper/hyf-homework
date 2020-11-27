import React, { useState } from 'react';
export function Counter() {
    
    const [counterState, setCounterState] = useState([0, 1]);
  
    // ... some code here
    
    const increment = () => {
        setCounterState([...counterState, (
            counterState[counterState.length-1]+counterState[counterState.length-2])])
    }

    return (
        <div>
            { counterState.map(counter => <div>{counter}</div>) }
            <button onClick={increment}>Increment</button>
        </div>
    );  
}