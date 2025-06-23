import React,{useState} from 'react'
import '../App.css';
export default function Exp2() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          <h1>Counter Application</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
         <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    </div>
  );
}

