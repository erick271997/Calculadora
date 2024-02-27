import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleDelete = () => {
    setDisplay(prevDisplay => prevDisplay.slice(0, -1));
  };
const habdlePorcetaje = ()=>{
    setDisplay(prevDisplay=>`${parseFloat(prevDisplay/100)}`)


}
const habdlexpone = ()=>{
    setDisplay(prevDisplay=>`${Math.pow(parseInt(prevDisplay),2) }`)
    
}
const habdlexpone3 = ()=>{
  setDisplay(prevDisplay=>`${Math.pow(parseInt(prevDisplay),3) }`)
  
}
const habdlRaiz = ()=>{
    setDisplay(prevDisplay=>` ${Math.sqrt(parseInt(prevDisplay))}` )

    
}
const habdlePin=()=>{
   setDisplay(prevDisplay=>`${parseFloat(prevDisplay*3.14159265359)}`)
   }


  return (
    <div>
        <h1 className='h1-cal'>Calculator</h1>
    <div className="calculator">
      <input  className="text" type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => habdlePorcetaje('%')}>%</button>
        <button onClick={habdlexpone}>x²</button>
        <button onClick={habdlexpone3}>x3</button>
        <button onClick={habdlRaiz}>√</button>
        <button onClick={habdlePin}>π</button>
      
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>AC</button>
        <button  onClick={handleDelete}>⌫</button>
      </div>
    </div>    </div>
  );
}

export default Calculator;
