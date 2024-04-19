import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="border w-1/5 p-3 text-lg font-bold">Todo Application</h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
