// https://frontendeval.com/questions/undoable-counter
import React, { useState } from "react";
import "./App.css";

// Todo:
// Save the state of the application locally so both the current count, and the undo history will remain even if the user reloads the page.

function App() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [undo, setUndo] = useState([]);

  function calculate(val) {
    setCounter(counter + val);
    setHistory([...history, [val, counter, counter + val]]);
  }

  function handleClick(type) {
    if (type === "undo") {
      let newHistory = [...history];
      const [symbol] = newHistory.pop();
      setUndo([...undo, symbol]);
      setCounter(counter - symbol);
      setHistory(newHistory);
    } else if (type === "redo") {
      let newUndo = [...undo];
      const symbol = newUndo.pop();
      setUndo(newUndo);
      setCounter(counter + symbol);
      setHistory([...history, [symbol, counter, counter + symbol]]);
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>Undoable counter</h2>
      <div>
        <button
          onClick={() => handleClick("undo")}
          disabled={history.length === 0}
        >
          Undo
        </button>
        <button
          onClick={() => handleClick("redo")}
          disabled={undo.length === 0}
        >
          Redo
        </button>
      </div>
      <div id="container">
        <button onClick={() => calculate(-100)}>-100</button>
        <button onClick={() => calculate(-10)}>-10</button>
        <button onClick={() => calculate(-1)}>-1</button>

        <div id="counter">{counter}</div>

        <button onClick={() => calculate(1)}>+1</button>
        <button onClick={() => calculate(10)}>+10</button>
        <button onClick={() => calculate(100)}>+100</button>
      </div>
      <h3>History</h3>
      <div>
        {history.map(([symbol, pre, cur], index) => (
          <div key={index}>
            {symbol > 0 ? `+${symbol}` : symbol} ({pre} {`->`} {cur})
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
