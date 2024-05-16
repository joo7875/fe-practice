import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((pre) => ({ count: pre.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click: {this.state.count}</button>
    );
  }
}

export default Counter;
