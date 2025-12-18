import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); 

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); 
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); 

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor((milliseconds / 60000) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return (
      ("0" + minutes).slice(-2) + ":" +
      ("0" + seconds).slice(-2) + ":" +
      ("0" + centiseconds).slice(-2)
    );
  };

  return (
    <div className="stopwatch-container">
      <h1 style={{ fontSize: "20px"}}>{formatTime(time)}</h1>
      <div className="stopwatch-buttons">
        <button onClick={startStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;