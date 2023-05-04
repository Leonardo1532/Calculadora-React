import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    setResult(num1 / num2);
  };

  return (
    <div className='content'>
      <h1>Calculadora Básica</h1>
      <div>
        <label htmlFor="num1">Número 1: </label>
        <input type="number" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Número 2: </label>
        <input type="number" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <p>Resultado: {result}</p>
      </div>
    </div>
  );
}

export default App;