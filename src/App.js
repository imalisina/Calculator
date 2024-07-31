import React from 'react';
import Calculator from './components/Calculator';
import './App.css'; 

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Calculator</h1>
            </header>
            <Calculator />
        </div>
    );
};

export default App;
