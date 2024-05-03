// https://frontendeval.com/questions/array-prototype-map
function App() {
  function map(array, callback) {
    if (typeof array !== "object") throw new Error("not array");

    let result = [];
    array.forEach((e, i) => result.push(callback(e, i)));

    return result;
  }

  const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
  console.log(mappedArray); // [2, 4, 6, 8, 10];

  const test = map([1, 2, 3, 4, 5], (x, i) => {
    console.log(`Element ${x} is at index ${i}; return ${x * 2};`);
  });
  console.log(test);
}

export default App;
