// https://frontendeval.com/questions/data-fetching?tab=question
import React, { useEffect, useState } from "react";
import "./App.css";

// Todo:
// 1) Ensure your histogram displays correctly with extremes, e.g. how does it handle very high frequencies of a single number, what about negative numbers?
// 2) Use different colors for each bar in the histogram.
// 3) Add a button to refetch/regenerate the data (the endpoint will return random numbers each time).
// 4) On hovering over a bar in the histogram, change the color and show a label above the bar with the precise value.
// 5) You may notice that the random.org URL takes query parameters that will change the numbers generated: include a form that will dynamically generate the URL to provide a different set of numbers (e.g. more numbers, min/max value).

function App() {
  const url =
    "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        let map = {};
        const arr = data.trim().split("\n");
        arr.forEach((n) => (map[n] = (map[n] || 0) + 1));
        setData(map);
      })
      .catch((e) => console.log("Data fetch error: ", e));
  }, []);

  return (
    <div id="container">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <div id="chart-y">
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        <div id="chart">
          {Object.values(data).map((n) => (
            <span style={{ height: n * 10 }}>{n}</span>
          ))}
        </div>
      </div>
      <div id="chart-x">
        {Object.keys(data).map((key) => (
          <span>{key}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
