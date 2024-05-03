// https://frontendeval.com/questions/modal-overlay
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Offer id="one" />
      <Offer id="two" />
    </div>
  );
}

function Offer({ id }) {
  const [modal, setModal] = useState(false);
  const [accept, setAccept] = useState(false);

  const Modal = () => {
    return (
      <div id="modal">
        <div>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            Click the button to accept offer!
          </div>
          <div>
            <button onClick={() => setAccept(true)}>Accept offer</button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    function handleKeyboard(e) {
      if (e.key === "Escape") setModal(false);
    }

    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, []);

  return (
    <div>
      {!modal && (
        <button onClick={() => setModal(true)}>Show offer {id}</button>
      )}
      {modal && !accept && <Modal />}
      {accept && <div>Offer accepted</div>}
    </div>
  );
}

export default App;
