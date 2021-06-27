import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };

  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      },
    })
  }

  deleteTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks].filter(task => task.id !== id),
      task: {
        text: '',
        id: uniqid()
      },
    })
  }

  render() {
    const { task, tasks, } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter Task</label>
          <input onChange={this.handleChange} value={task.text} type='text' id='taskInput' />
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} handleDelete={this.deleteTask} />
      </div>
    );
  }
}

// This is my implemintation

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       taskArray: [],
//     };

//     this.addToTasks = this.addToTasks.bind(this);
//   }

//   addToTasks() {
//     const input = document.querySelector('.input-field').value;
//     this.setState((prevState) => {
//       return {
//         taskArray: [...this.state.taskArray, input],
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <input className="input-field" type="text" required />
//           <button onClick={this.addToTasks}>Submit Input</button>
//         </div>
//         <Overview tasks={this.state.taskArray} />
//         <h1>Here gonna be tasks</h1>
//       </div>
//     );
//   }
// }


export default App;
