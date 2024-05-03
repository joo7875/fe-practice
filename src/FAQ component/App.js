// https://frontendeval.com/questions/faq-component
import React, { useState } from "react";

const qa = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    open: true,
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    open: false,
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    open: false,
  },
];

function App() {
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      {qa.map((item, id) => (
        <Item key={id} item={item} />
      ))}
    </>
  );
}

function Item({ item }) {
  const { question, answer, open } = item;
  const [toggle, setToggle] = useState(open);

  return (
    <div
      style={{
        border: "solid 1px gray",
        marginBottom: "20px",
        padding: "20px",
      }}
      onClick={() => setToggle(!toggle)}
    >
      <div>{question}</div>
      {toggle && (
        <div
          style={{
            color: "red",
            transition: "all 0.5s ease",
            opacity: toggle ? 1 : 0,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default App;
