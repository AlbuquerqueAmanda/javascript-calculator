import React, { useState } from 'react';
import styles from './Calculator.module.css';

function Calculator() {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(formula));
      } catch (error) {
        setResult('Error');
      }
      setFormula('');
    } else if (value === 'AC') {
      setFormula('');
      setResult('');
    } else {
      setFormula((prevFormula) => prevFormula + value);
    }
  };
  
  return (
    <>
    <div className={styles.base}>
      <div className={styles.screen}>
        <div className={styles.formulaScreen}>{formula}</div>
        <div className={styles.outputScreen} id="display">{result}</div>
      </div>
      <div className={styles.body}></div>
    </div>
    <div className={styles.calculator}>
      <div className={styles.firstRow}>
        <button onClick={() => handleClick('AC')} className={styles.ac} id="clear" value="AC">AC</button>
        <button onClick={() => handleClick('/')} id="divide" value="/">/</button>
        <button onClick={() => handleClick('*')} value="*" id="multiply">x</button>
      </div>
      <div className={styles.secondRow}> 
        <button onClick={() => handleClick('7')} id="seven" value="7">7</button>
        <button onClick={() => handleClick('8')} id="eight" value="8">8</button>
        <button onClick={() => handleClick('9')} id="nine" value="9">9</button>
        <button onClick={() => handleClick('-')} id="subtract" value="-">-</button>
      </div>
      <div className={styles.thirdRow}>
        <button onClick={() => handleClick('4')} id="four" value="4">4</button>
        <button onClick={() => handleClick('5')} id="five" value="5">5</button>
        <button onClick={() => handleClick('6')} id="six" value="6">6</button>
        <button onClick={() => handleClick('+')} id="add" value="+">+</button>
      </div>
      <div className={styles.fourthRow}>
        <button onClick={() => handleClick('1')} id="one" value="1">1</button>
        <button onClick={() => handleClick('2')} id="two" value="2">2</button>
        <button onClick={() => handleClick('3')} id="three" value="3">3</button>
      </div>
      <div className={styles.lastRow}>
        <button onClick={() => handleClick('0')} className={styles.zero} id="zero" value="0">0</button>
        <button onClick={() => handleClick('.')} id="decimal" value=".">.</button>
      </div>
        <button onClick={() => handleClick('=')} className={styles.equals} id="equals" value="=">=</button>
    </div>
    </>
      )
  };
  
  export default Calculator;   