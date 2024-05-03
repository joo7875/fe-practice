// https://frontendeval.com/questions/debounce?tab=question

function App() {
  function debounce(callback, interval) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), interval);
    };
  }

  const myCallback = () => console.log("Hello");
  const myDebouncedCallback = debounce(myCallback, 1000);

  // call function immediately (after 0ms)
  myDebouncedCallback();

  // call function after 100ms
  setTimeout(myDebouncedCallback, 100);

  // call function after 500ms
  setTimeout(myDebouncedCallback, 500);

  // call function after 2000ms
  setTimeout(myDebouncedCallback, 2000);

  // call function after 4000ms
  setTimeout(myDebouncedCallback, 4000);
}

export default App;
