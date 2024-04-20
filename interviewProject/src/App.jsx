import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(1);
  // const [multiplied, setMultiplied] = useState();
  const multiplied=current*5;
  console.log("rendered");

  function handleMultiply() {
    // setMultiplied(current* 5);
    setCurrent(current+1);
  }

  return (
    <>
      <h1>Current Number: {current}</h1>
      <button onClick={handleMultiply}>click to multiply by 5</button>
      <h2>Multiplied Number: {multiplied}</h2>
    </>
  );
}

export default App;
