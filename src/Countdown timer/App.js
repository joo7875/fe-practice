// https://frontendeval.com/questions/countdown-timer
import React, { useState } from "react";
import Timer from "./Timer";

function App() {
  let key = 0;
  const [timers, setTimers] = useState([<Timer key={key} />]);

  return (
    <>
      <h2>Countdown Timer</h2>
      {timers.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <div style={{ margin: "20px" }}>
        <button onClick={() => setTimers([...timers, <Timer key={++key} />])}>
          Add timer
        </button>
      </div>
    </>
  );
}

export default App;
