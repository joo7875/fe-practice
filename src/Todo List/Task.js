import { Component } from "react";

class Task extends Component {
  render() {
    const { id, task, deleteTask } = this.props;

    return (
      <div>
        <span>
          {id} {task}
        </span>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    );
  }
}

export default Task;
