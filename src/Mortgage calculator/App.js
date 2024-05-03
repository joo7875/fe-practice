// https://frontendeval.com/questions/mortgage-calculator
import React, { useState } from "react";
import "./App.css";

// P(r*C1/(C1-1))

function App() {
  const [principal, setPrincipal] = useState(100000);
  const [interest, setInterest] = useState(10);
  const [length, setLength] = useState(30);

  const [monthlyPayment, setMonthlyPayment] = useState();
  const [totalPayment, setTotalPayment] = useState();

  function calculate() {
    const monthlyInterest = interest / 100 / 12;
    const monthlyLength = length * 12;

    const c1 = Math.pow(1 + monthlyInterest, monthlyLength);
    const c2 = (principal * (monthlyInterest * c1)) / (c1 - 1);
    setMonthlyPayment(c2.toFixed(0));
    setTotalPayment((c2 * monthlyLength).toFixed(0));
  }

  return (
    <>
      <div>
        <label htmlFor="principal">Principal loan amount</label>
        <br />
        <input
          type="number"
          id="principal"
          min={0}
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        $
      </div>
      <div>
        <label htmlFor="interest">Interest rate</label>
        <br />
        <input
          type="number"
          id="interest"
          min={0}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        %
      </div>
      <div>
        <label htmlFor="length">Length of loan</label>
        <br />
        <input
          type="number"
          id="length"
          min={0}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        Years
      </div>

      <button onClick={calculate}>Calculate</button>
      {monthlyPayment && (
        <div>
          You monthly mortgage payment will be $
          {isNaN(monthlyPayment) ? 0 : monthlyPayment}
        </div>
      )}
      {totalPayment && <div>Total printipal amount ${totalPayment}</div>}
    </>
  );
}

export default App;
