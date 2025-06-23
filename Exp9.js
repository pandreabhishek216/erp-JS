import React, { useState } from 'react';
import '../App.css';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  // Helper function to add value to input
  const addToInput = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  // Remove last character
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Evaluate the input expression with support for functions
  const calculate = () => {
    if (!input) return;
    try {
      // Replace function names with Math equivalents
      let expression = input;

      // Map calculator functions to JS Math functions
      expression = expression
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/(\d+)!/g, (match, number) => `factorial(${number})`);

      // Handle factorial since JS has no built-in factorial function
      const factorial = (n) => {
        n = Number(n);
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      };

      // Evaluate expression with factorial support via new Function scope
      // eslint-disable-next-line no-new-func
      // Also convert degrees to radians for trig functions
      const wrappedExpression = expression.replace(/Math\.sin\(/g, 'Math.sin(deg2rad(')
                                          .replace(/Math\.cos\(/g, 'Math.cos(deg2rad(')
                                          .replace(/Math\.tan\(/g, 'Math.tan(deg2rad(');

      const deg2rad = (deg) => (deg * Math.PI) / 180;

      const func = new Function('factorial', 'deg2rad', `return ${wrappedExpression}`);
      const result = func(factorial, deg2rad);

      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="scientific-calculator">
      <div className="display" data-testid="display">{input || '0'}</div>

      <div className="buttons">

        {/* Row 1 */}
        <button className="btn btn-clear" onClick={handleClear}>C</button>
        <button className="btn btn-backspace" onClick={handleBackspace}>⌫</button>
        <button className="btn btn-operator" onClick={() => addToInput('(')}>(</button>
        <button className="btn btn-operator" onClick={() => addToInput(')')}>)</button>

        {/* Row 2 */}
        <button className="btn btn-function" onClick={() => addToInput('sin(')}>sin</button>
        <button className="btn btn-function" onClick={() => addToInput('cos(')}>cos</button>
        <button className="btn btn-function" onClick={() => addToInput('tan(')}>tan</button>
        <button className="btn btn-operator" onClick={() => addToInput('^')}>^</button>

        {/* Row 3 */}
        <button className="btn btn-function" onClick={() => addToInput('log(')}>log</button>
        <button className="btn btn-function" onClick={() => addToInput('ln(')}>ln</button>
        <button className="btn btn-function" onClick={() => addToInput('sqrt(')}>√</button>
        <button className="btn btn-operator" onClick={() => addToInput('%')}>%</button>

        {/* Row 4 */}
        <button className="btn" onClick={() => addToInput('7')}>7</button>
        <button className="btn" onClick={() => addToInput('8')}>8</button>
        <button className="btn" onClick={() => addToInput('9')}>9</button>
        <button className="btn btn-operator" onClick={() => addToInput('/')}>÷</button>

        {/* Row 5 */}
        <button className="btn" onClick={() => addToInput('4')}>4</button>
        <button className="btn" onClick={() => addToInput('5')}>5</button>
        <button className="btn" onClick={() => addToInput('6')}>6</button>
        <button className="btn btn-operator" onClick={() => addToInput('*')}>×</button>

        {/* Row 6 */}
        <button className="btn" onClick={() => addToInput('1')}>1</button>
        <button className="btn" onClick={() => addToInput('2')}>2</button>
        <button className="btn" onClick={() => addToInput('3')}>3</button>
        <button className="btn btn-operator" onClick={() => addToInput('-')}>−</button>

        {/* Row 7 */}
        <button className="btn btn-zero" onClick={() => addToInput('0')}>0</button>
        <button className="btn" onClick={() => addToInput('.')}>.</button>
        <button className="btn btn-function" onClick={() => addToInput('!')}>!</button>
        <button className="btn btn-zero" onClick={() => addToInput('00')}>00</button>
        <button className="btn btn-operator" onClick={() => addToInput('dy/dx')}>dy/dx</button>
        <button className="btn btn-operator" onClick={() => addToInput('+')}>+</button>
        
        


        {/* Row 8 */}
        <button className="btn btn-equal btn-wide" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
