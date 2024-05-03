// https://frontendeval.com/questions/rolling-dice
import React, { useState } from "react";
import "./App.css";

// Todo:
// 1) Styling
// 2) Animation
// 3) Rolled history

function App() {
  const SIZE = 3;
  const [n, setN] = useState(5);
  const [row, setRow] = useState(0);
  const [remainder, setRemainder] = useState(0);

  function createDice() {
    setRow(Math.floor(n / SIZE));
    setRemainder(n % 3);
  }

  const Board = () => {
    const arr1 = new Array(row).fill(0);
    const arr2 = new Array(SIZE).fill(0);

    return (
      <>
        {arr1.map((_, rId) => (
          <div key={rId} className="board">
            {arr2.fill(0).map((_, cId) => (
              <Dice key={cId} />
            ))}
          </div>
        ))}
      </>
    );
  };

  const Dice = () => {
    const random = Math.ceil(Math.random() * 6);
    return (
      <div className="dice">
        <div className={diceStyle(random)}></div>
      </div>
    );
  };

  function diceStyle(number) {
    switch (number) {
      case 1:
        return "dice-1";
      case 2:
        return "dice-2";
      case 3:
        return "dice-3";
      case 4:
        return "dice-4";
      case 5:
        return "dice-5";
      case 6:
        return "dice-6";
      default:
        break;
    }
  }

  return (
    <>
      <h2>Number of dice</h2>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        min={0}
      />
      <button onClick={createDice}>Roll</button>

      <div>
        <Board />
        <div className="board">
          {new Array(remainder).fill(0).map((_, index) => (
            <div key={index} className="dice">
              {Math.ceil(Math.random() * 6)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
