import React, { useState } from 'react';
import './App.css';
import { validateNumber } from "./utils"

function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [result, setResult] = useState("");
  const [convert, setConvert] = useState("CtoK");
 
 const isInvalidInput = () => {
    return(
      <p className='error'>Please enter a valid Input</p>
    )
 }
  const validateInput = () => {
    return(
      inputValue &&
      validateNumber(inputValue)
    )
  }
  const convertTemperature = () => {
    const inputValueFloat = parseFloat(inputValue); 
    

    if (convert === "CtoK") {
      setResult(`${inputValueFloat + 273} K`);
    } else if (convert === "KtoC") {
      setResult(`${inputValueFloat - 273} °C`);
    } else if (convert === "CtoF") {
      setResult(`${(inputValueFloat * 9/5) + 32} °F`);
    } else if (convert === "FtoC") {
      setResult(`${(inputValueFloat - 32) * 5/9} °C`);
    }
  };

  return (
    <div>
      <div className='main-container'>
      <h1>Temperature Converter App</h1>
      <div className='second-container'>
      <select value={convert} className="selector"onChange={e => setConvert(e.target.value)}>
        <option value="CtoK">Celsius to Kelvin</option>
        <option value="KtoC">Kelvin to Celsius</option>
        <option value="CtoF">Celsius to Fahrenheit</option>
        <option value="FtoC">Fahrenheit to Celsius</option>
      </select>
      <input type='text' id='converter' value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
      </div>
      <div className='third-container'>
      <button disabled={validateInput}onClick={convertTemperature}>Convert</button>
      <p>Result: {result}</p>
      </div>
      </div>
    </div>
  );
}

export default App;

