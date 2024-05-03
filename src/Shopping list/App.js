// https://frontendeval.com/questions/shopping-list?tab=question
import React, { useEffect, useState } from "react";

// Todo:
// 1) Accessibility
// 2) Drag and drop

function debounce(fn) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), 1000);
  };
}

function App() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [highlight, setHighlight] = useState(0);

  const getData = debounce((input) => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });

  function addCart(item) {
    setItems([...items, { name: item, checked: false, quantity: 0 }]);
  }

  useEffect(() => {
    if (!data || data.length === 0) return;

    const handleKeyboard = (e) => {
      console.log(data[highlight]);
      if (e.key === "ArrowDown" && highlight < data.length - 1)
        setHighlight((pre) => pre + 1);
      else if (e.key === "ArrowUp" && highlight > 0)
        setHighlight((pre) => pre - 1);
      else if (e.key === "Enter")
        setItems([
          ...items,
          { name: data[highlight], checked: false, quantity: 0 },
        ]);
    };

    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, [data, highlight, items]);

  const Item = ({ id, item }) => {
    const [enabled, setEnabled] = useState(true);

    function deleteItem() {
      const filtered = items.filter((_, index) => index !== id);
      setItems(filtered);
    }

    function checkOff() {
      const updatedItems = [...items];
      updatedItems[id] = {
        ...updatedItems[id],
        checked: !updatedItems[id].checked,
      };
      setItems(updatedItems);
    }

    function updateQuantity(val) {
      const updatedItems = [...items];
      updatedItems[id] = { ...updatedItems[id], quantity: val };
      setItems(updatedItems);
    }

    return (
      <div style={{ display: "grid", gridTemplateColumns: "100px auto auto" }}>
        <span
          role="button"
          onClick={() => checkOff()}
          style={{ color: item.checked ? "gray" : "black", cursor: "pointer" }}
        >
          {item.name}
        </span>
        <input
          type="number"
          disabled={item.checked}
          min={0}
          value={item.quantity}
          style={{ width: "50px" }}
          onChange={(e) => updateQuantity(e.target.value)}
        />
        <button disabled={item.checked} onClick={() => deleteItem()}>
          X
        </button>
      </div>
    );
  };

  const Data = ({ id, item }) => {
    return (
      <div
        role="button"
        onClick={() => addCart(item)}
        style={{
          border: "2px solid orange",
          cursor: "pointer",
          marginBottom: "10px",
          backgroundColor: highlight === id ? "yellow" : "white",
        }}
      >
        {item}
      </div>
    );
  };

  return (
    <>
      <h2>My shopping list</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <input
            aria-label="search shopping data"
            type="text"
            onChange={(e) => getData(e.target.value)}
          />
          {data.map((e, index) => (
            <Data key={index} id={index} item={e} />
          ))}
        </div>
        {/* cart */}
        <div>
          {items.map((e, index) => (
            <Item key={index} id={index} item={e} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
