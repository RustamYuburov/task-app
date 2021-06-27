import React, { Component } from 'react';

const Overview = (props) => {
  const { tasks , handleDelete } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return <div>
          <li key={task.id}>{index + 1}. {task.text}</li>
          <button onClick={() => handleDelete(task.id)}>delete</button>
        </div>
        
      })}
    </ul>
  )
}

// This is my implementaion 

// class Overview extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const tasksDisplay = this.props.tasks.map(task => {
//       return (
//         <h4>{task}</h4>
//       )
//     })
    
//     return(
//       <div>
//         {tasksDisplay}
//       </div>
//     )
//   }
// }

export default Overview ;