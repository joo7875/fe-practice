import { Component } from "react";

class Tabs extends Component {
  render() {
    const { description } = this.props.tab;

    return <div>{description}</div>;
  }
}

export default Tabs;
