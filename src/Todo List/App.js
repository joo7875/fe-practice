import { Component } from "react";
import Task from "./Task";

class App extends Component {
  state = {
    taskInput: "",
    tasks: [],
  };

  addTask = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  deleteTask = (id) => {
    this.setState((pre) => ({
      tasks: pre.tasks.filter((_, index) => index !== id),
    }));
  };

  submit = () => {
    this.setState((pre) => ({
      tasks: [...pre.tasks, pre.taskInput],
      taskInput: "",
    }));
  };

  render() {
    const { taskInput, tasks } = this.state;

    return (
      <>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Add your task"
          value={taskInput}
          onChange={this.addTask}
        />
        <button onClick={this.submit}>Submit</button>
        <div>
          {tasks.map((task, index) => (
            <Task
              key={index}
              id={index}
              task={task}
              deleteTask={this.deleteTask}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
