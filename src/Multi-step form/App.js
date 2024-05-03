// https://frontendeval.com/questions/multi-step-form?tab=question
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSurvey, setEmailSurvey] = useState("");
  const [bd, setBd] = useState("");
  const [pw, setPw] = useState("");
  const [page, setPage] = useState(0);

  const content = [
    {
      id: "name",
      type: "text",
      name: "Name",
      value: name,
    },
    {
      id: "email",
      type: "email",
      name: "Email",
      value: email,
    },
    {
      id: "bd",
      type: "date",
      name: "Date of birth",
      value: bd,
    },
    {
      id: "pw",
      type: "password",
      name: "Password",
      value: pw,
    },
  ];

  function handleChange(e) {
    const val = e.target.value;

    if (page === 0) setName(val);
    else if (page === 1) setEmail(val);
    else if (page === 2) setBd(val);
    else if (page === 3) setPw(val);
  }

  function handleClick() {
    if (page < content.length - 1) setPage(page + 1);
    else {
      alert(
        `Name: ${name}\nEmail: ${email}\nEmail survey: ${emailSurvey}\nDate of birth: ${bd}\nPassword: ${pw}`
      );
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      {page !== 0 && (
        <div
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setPage(page - 1)}
        >{`< back`}</div>
      )}
      <label htmlFor={content[page].id}>{content[page].name}</label>
      <br />
      <input
        type={content[page].type}
        id={content[page].id}
        name={content[page].id}
        value={content[page].value}
        onChange={(e) => handleChange(e)}
      />
      <br />
      {email.includes("gmail") && page === 1 && (
        <div>
          <label htmlFor="email-survey">Why do you use Gmail? Tell us.</label>
          <br />
          <input
            type="text"
            id="email-survey"
            onChange={(e) => setEmailSurvey(e.target.value)}
          />
        </div>
      )}
      <button onClick={handleClick}>
        {page === content.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default App;
