import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]=useState(0);

  function increaseCount(){
   setCount(count+1);
  }

  function decreaseCount(){
   setCount(count-1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <p>Counter: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </>
  )
}

export default App
