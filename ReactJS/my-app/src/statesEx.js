import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App() {
    const {word, setWord} = React.useState('Eat');
    function handleClick() {
        setWord('Drink')
    }
    
    return (
        <div className="App">
            <Heading meassage={word + "at Little Lemon"}/>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default Heading;
