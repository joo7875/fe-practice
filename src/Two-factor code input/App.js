// https://frontendeval.com/questions/code-input
import React, { useRef, useState } from "react";
import "./App.css";

// Todo:
// 1) Copy and paste

function App() {
  const [digit, setDigit] = useState(new Array(4).fill(""));
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null)];

  function handleChange(e, index) {
    const val = e.target.value;

    if (!isNaN(val) && val.length <= 1) {
      let newDigit = [...digit];
      newDigit[index] = val;
      setDigit(newDigit);

      if (val.length === 1) ref[index + 1].current.focus();
    }
  }

  function handleKeyboard(e, index) {
    if (e.key === "Backspace" && digit[index].length === 0) {
      ref[index - 1].current.focus();
    }
  }

  function handleSubmit() {
    if (!digit[0]) ref[0].current.focus();
    else if (!digit[1]) ref[1].current.focus();
    else if (!digit[2]) ref[2].current.focus();
    else if (!digit[3]) ref[3].current.focus();
  }

  return (
    <>
      {digit.map((code, index) => (
        <input
          type="type"
          key={index}
          value={code}
          className="input"
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyboard(e, index)}
          ref={ref[index]}
        />
      ))}
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
