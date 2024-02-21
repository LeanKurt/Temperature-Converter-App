import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [convert, setConvert] = useState("C to K");
  const result = "";
  const convertTemperature = () => {
    if(option.value == "C to K"){
      setValue(value + 273);
    } else if(option.value == "K to C"){
      setValue(value - 273);
    } else if(option.value == "C to F") {
      setValue(value * 9 / 5 + 32);
    } else if(option.value == "F to C") {
      
    }
  }

  return (
    
    <div className='main-container'>
      <h1>Temperature Converter App</h1>
      <select value={convert} onChange={e => setConvert(e.target.value)}>
      <option value="C to K">Celsuis to Kelvin</option>
      <option value="K to C">Kelvin to Celsuis</option>
      <option value="C to F">Celsuis to Fahrenheit</option>
      <option value="C to F">Fahrenheit to Celsuis</option>
      </select>
      <label htmlFor='converter'>Converter</label>
      <input type='text' id='conventer' value={value}></input>
      <p>result:{value}</p>
      <button onClick={convertTemperature()}>Convert</button>
    </div>
  )
}

export default App
