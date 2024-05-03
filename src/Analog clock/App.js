// https://frontendeval.com/questions/analog-clock
import React, { useEffect, useState } from "react";
import "./App.css";

// Todo:
// 1) Styling transform: rotate()
// 2) Add number each clock face
// 3) Local time, New York time, London time zone
// 4) Add additional timezones, and a way for the user to select to display/hide them (checkbox)

function App() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    let interval = setInterval(() => {
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 1000);

    return () => clearInterval(interval);
  }, [hour, minute, second]);

  return (
    <>
      <div>
        {hour}, {minute}, {second}
      </div>
    </>
  );
}

export default App;
