
import './App.css';

import { Timer } from "./components/Timer";

import { useState } from "react";

function App() {
  const [Show, setShow] = useState(true);

  const handleShow = (value) =>{
    setShow(value);
  }
  return (
    <div className="App">
      {Show ? <Timer start = {1} end = {100} ShowFn = {handleShow} /> : "Timer : Ended"}
      <div>
        <button onClick={() =>{
          setShow(true);
        }}>Show</button>
        <button onClick={() =>{
          setShow(false);
        }}>Hide</button>
      </div>
    </div>
  );
}

export default App;
