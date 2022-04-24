import React, {useState} from 'react';

const computeInitialCounter = () => {
    console.log('Some calc');
    return Math.trunc(Math.random() * 20);
}

const State = () => {
    //const [counter, setCounter] = useState(0)
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter();
    })

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    const increment = () => {
        // setCounter(counter + 1);
        // setCounter(counter + 1);

        setCounter((prevCounter) => {
            return prevCounter + 1;
        })

        //setCounter(prev => prev + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'New name'
            }
        });
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button
                onClick={increment}
                className="btn btn-success"
            >
                Add</button>
            <button
                onClick={decrement}
                className="btn btn-danger"
            >
                Delete</button>

            <button
                onClick={updateTitle}
                className="btn btn-default"
            >
                Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default State;