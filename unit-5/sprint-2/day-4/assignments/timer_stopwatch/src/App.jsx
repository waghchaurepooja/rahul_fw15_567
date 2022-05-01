
import './App.css';

import { useState } from "react";

import { Display } from "./components/Display";
import { Button } from "./components/Button";

function App() {

  const [time, setTime] = useState({
    ms : 0,
    s : 0,

    m : 0,
    h : 0
  })
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    console.log("start");
    run();

    setStatus(1);
    setInterv(setInterval(run, 10))
  }

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60) {

      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100) {
      updatedS++;
      updatedMs = 0
    }
    updatedMs++;
    return setTime({ms : updatedMs, s : updatedS, m : updatedM, h : updatedH});
  }


  const stop = () => {
    console.log("start");
    
    clearInterval(interv)
    setStatus(2);
  }

  const reset = () => {
    console.log("start");
    
    clearInterval(interv)
    setStatus(0);
    setTime({ms : 0, s : 0, m : 0, h : 0});
  }

  const resume = () => {
    console.log("start");
    start();
  }
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display ms = {time.ms} s = {time.s} m = {time.m} h = {time.h} />
          
          <Button resumefn = {resume} resetfn = {reset} stopfn = {stop} status = {status} startfn = {start} />
        </div>
      </div>
    </div>
  );
}

export default App;
