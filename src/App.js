import './App.css';

import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id:1,
        title: "First ToDo",
        complete : false
      },
      {
        id:2,
        title: "Second ToDo",
        complete : false
      },
      {
        id:3,
        title: "Third ToDo",
        complete : false
      }
    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <h1>To Do Application</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App