import React,{useState} from 'react'
import '../App.css'
export default function Exp21() {
  const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>Increment</button>
      <p>COUNT: {count}</p>
      <button className="counter-btn" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
