import React, { useState } from 'react';
import './App.css';

function ResultItem({ result }) {
  return (
    <li>{result}</li>
  );
}

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    const newResult = num1 + num2;
    setResult(newResult);
    setHistory([...history, newResult]);
  };

  const handleSubtraction = () => {
    const newResult = num1 - num2;
    setResult(newResult);
    setHistory([...history, newResult]);
  };

  const handleMultiplication = () => {
    const newResult = num1 * num2;
    setResult(newResult);
    setHistory([...history, newResult]);
  };

  const handleDivision = () => {
    const newResult = num1 / num2;
    setResult(newResult);
    setHistory([...history, newResult]);
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
      <div>
        <h2>Histórico de Resultados</h2>
        <ul>
          {history.map((result, index) => (
            <ResultItem key={index} result={result} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
