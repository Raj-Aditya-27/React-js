import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("olive");

  function changeBgColor(bgColour) {
    setColor(bgColour);
  }

  return (
    <>
      <div className={`bg-${color} h-screen text-white flex p-10 justify-center`}>
        <div className="flex w-auto justify-around items-center w-screen flex-wrap border h-max rounded bg-gray-300 p-3 gap-x-16 fixed bottom-5 ">
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-red-600 rounded"
            onClick={() => changeBgColor("red-600")}
          >
            Red
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-green-600 rounded"
            onClick={() => changeBgColor("green-600")}
          >
            Green
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-blue-600 rounded"
            onClick={() => changeBgColor("blue-600")}
          >
            Blue
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-yellow-600 rounded"
            onClick={() => changeBgColor("yellow-600")}
          >
            Yellow
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-orange-600 rounded"
            onClick={() => changeBgColor("orange-600")}
          >
            Orange
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-purple-600 rounded"
            onClick={() => changeBgColor("purple-600")}
          >
            Purple
          </div>
          <div
            className="cursor-pointer border p-2 w-24 text-center bg-black rounded"
            onClick={() => changeBgColor("black")}
          >
            Black
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
