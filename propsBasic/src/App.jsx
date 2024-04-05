import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let names = [{username:"Deepika",profession:"Acteress"}, {username:"Sakira",profession:"Singer"}];

  return (
    <>
      <h1 className="text-blue-600">Hello world!</h1>
      <div className="flex">
        {names.map((detail) => (
          <Card key={detail.username} person={detail} />
        ))}
      </div>
    </>
  );
}

export default App;
