import React, {useState} from 'react';
import './App.css';
import {Button} from "@dp/app2";

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <h2>count: {count}</h2>
            <Button text='click me' onClick={() => setCount(p => ++p)}/>
        </div>
    );
}

export default App;
