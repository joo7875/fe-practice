import { Component } from "react";
import Tabs from "./Tabs";

const tabs = [
  {
    value: "html",
    label: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "js",
    label: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

class App extends Component {
  state = {
    selected: "html",
  };

  handleClick = (value) => () => {
    this.setState({ selected: value });
  };

  render() {
    const { selected } = this.state;

    return (
      <>
        <div>
          {tabs.map(({ value, label }) => (
            <button
              key={value}
              style={{
                backgroundColor: selected === value ? "yellow" : undefined,
              }}
              onClick={this.handleClick(value)}
            >
              {label}
            </button>
          ))}
        </div>
        {tabs
          .filter(({ value }) => selected === value)
          .map((tab) => (
            <Tabs key={tab.value} tab={tab} />
          ))}
      </>
    );
  }
}

export default App;
