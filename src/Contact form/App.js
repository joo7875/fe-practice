const { Component } = require("react");

class App extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = () => {
    alert(
      `
        Name: ${this.state.name}
        Email: ${this.state.email}
        Message: ${this.state.message}
      `
    );
  };

  handleChange = (type) => (e) => {
    if (type === "name") this.setState({ name: e.target.value });
    else if (type === "email") this.setState({ email: e.target.value });
    else if (type === "message") this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange("message")}
          />
        </div>
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default App;
