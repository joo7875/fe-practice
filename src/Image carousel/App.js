// https://frontendeval.com/questions/image-carousel?tab=question
import React, { useEffect, useState } from "react";
import "./App.css";

// Todo:
// 1) Add image selector circles. The highlighted circle should have the same index of the current image, and the user should be able to click on a circle to jump to that image.
// 2) Allow the user to select from a (static) list of subreddits to change the cycled images
// 3) Allow the user to see top images from the day, week, month, year, or all time by dynamically appending a query param to the URL: e.g. https://www.reddit.com/r/aww/top/.json?t=day (or t=week, t=month, t=year, t=all).
// 4) Offer an option for animations (e.g. fade in, slide in from the left/right).

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const images = data.data.children
          .map(({ data }) => data.url_overridden_by_dest)
          .filter((e) => e.slice(-4) === ".jpg");
        setData(images);
      })
      .catch((e) => console.log("Data fetch error: ", e));
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setPage((pre) => (pre === data.length - 1 ? 0 : pre + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  function handleClick(type) {
    if (type === "left") {
      if (page === 0) setPage(data.length - 1);
      else setPage(page - 1);
    } else if (type === "right") {
      if (page === data.length - 1) setPage(0);
      else setPage(page + 1);
    }
  }

  return (
    <div id="container">
      <div id="sub-container">
        <button onClick={() => handleClick("left")}>{`<`}</button>
        <img alt={data[page]} src={data[page]} />
        <button onClick={() => handleClick("right")}>{`>`}</button>
      </div>
      <div>{page}</div>
    </div>
  );
}

export default App;
