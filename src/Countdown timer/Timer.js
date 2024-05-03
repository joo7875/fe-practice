import React, { useEffect, useState } from "react";

function Timer() {
  const [start, setStart] = useState(true);
  const [pause, setPause] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let interval;

    if (!start && !pause) {
      interval = setInterval(() => {
        if (second <= 0 && minute <= 0 && hour <= 0) {
          clearInterval(interval);
          prompt("Finish!");
          setStart(!start);
        } else {
          if (second === 0) {
            if (minute === 0) {
              if (hour !== 0) {
                setHour((pre) => pre - 1);
                setMinute(59);
                setSecond(59);
              }
            } else {
              setMinute((pre) => pre - 1);
              setSecond(59);
            }
          } else setSecond((pre) => pre - 1);
        }
      }, 1000);
    }

    // dynamically update browser title
    document.title = `${formatZero(hour)} : ${formatZero(
      minute
    )} : ${formatZero(second)}`;

    return () => clearInterval(interval);
  }, [start, pause, hour, minute, second]);

  function handleChange(type, value) {
    if (value < 0) return;
    if (type === "hour") setHour(value);
    else if (type === "minute") setMinute(value);
    else if (type === "second") setSecond(value);
  }

  function formatZero(n) {
    return n > 9 ? n : `0${n}`;
  }

  const StartScreen = () => {
    return (
      <div>
        <input
          type="number"
          name="hour"
          max={12}
          value={formatZero(hour)}
          onChange={(e) => handleChange("hour", e.target.value)}
        />
        :
        <input
          type="number"
          name="minute"
          max={59}
          value={formatZero(minute)}
          onChange={(e) => handleChange("minute", e.target.value)}
        />
        :
        <input
          type="number"
          name="second"
          max={59}
          value={formatZero(second)}
          onChange={(e) => handleChange("second", e.target.value)}
        />
        <button onClick={() => setStart(!start)}>Start</button>
      </div>
    );
  };

  const ResetScreen = () => {
    function handleReset() {
      setStart(!start);
      setHour(0);
      setMinute(0);
      setSecond(0);
    }

    return (
      <div>
        <span>{formatZero(hour)}</span>:<span>{formatZero(minute)}</span>:
        <span>{formatZero(second)}</span>
        <button onClick={() => setPause(!pause)} style={{ marginRight: "5px" }}>
          {!pause ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {start ? <StartScreen /> : <ResetScreen />}
    </div>
  );
}

export default Timer;
