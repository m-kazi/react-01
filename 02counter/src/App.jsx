import { useState } from "react";
import "./App.css";

function App() {
    // let counter = 5;
    //to declare variable in React & update
    let [counter, setCounter] = useState(0);

    const addValue = () => {
        // console.log("value added", counter);
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };

    const removeValue = () => {
        if (counter > 0) setCounter(counter - 1);
    };

    return (
        <>
            <h1>React with Kazi: {counter}</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>Remove value</button>
        </>
    );
}

export default App;
