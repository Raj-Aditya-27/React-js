import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Length, setLength] = useState(10);
  const [password, setPassword] = useState("password");
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [Length, numbersAllowed, charactersAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "~!@#$%^&*()_";

    for (let index = 1; index <= Length; index++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }

    setPassword(pass);
  }, [Length, numbersAllowed, charactersAllowed]);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  return (
    <>
      <div className="border bg-purple-600 flex flex-col p-2 h-48 w-[50vw] justify-around">
        <div className="font-bold text-2xl">Password Generator</div>
        <div className="flex border">
          <input
            className="w-3/5  px-3 outline-none bg-white text-black"
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button className="w-2/5" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex  gap-x-2">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={20}
              value={Length}
              id="length"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length ({Length})</label>
          </div>
          <div className="flex  gap-x-2 flex-wrap">
            <input
              type="checkbox"
              id="numbers"
              className="cursor-pointer"
              checked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="numbers" className="cursor-pointer">
              Numbers
            </label>
          </div>
          <div className="flex   gap-x-2 flex-wrap">
            <input
              type="checkbox"
              id="characters"
              className="cursor-pointer"
              checked={charactersAllowed}
              onChange={() => setCharactersAllowed((prev) => !prev)}
            />
            <label htmlFor="characters" className="cursor-pointer ">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
