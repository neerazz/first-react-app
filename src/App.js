import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ToDoHeader from "./components/layout/ToDoHeader";
import Todos from "./components/ToDo/Todos";
import AddToDo from "./components/ToDo/AddToDo";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  // This method will be invoked when the component is loaded and ready.
  componentDidMount(){
    // We are making an get API call, for list of todos.
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        console.log("This is the api response : ");
        console.log(res.data);
        this.setState({ todos: res.data })
      });
  }

  completeToDo = (id) => {
    console.log("Changing staus of Task : " + id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteToDo = (id) => {
    console.log("Deleting the Task : " + id);
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  addToDo = (title) => {
    console.log("Adding task with title : " + title);
    const newToDo = {
      id: this.state.todos.length + 1,
      title: title,
      complete: false,
    };
    this.setState({ todos: [...this.state.todos, newToDo] });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ToDoHeader />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  {/* When a route has to be binded with many components then it should be enclosed with in the React.Fragment.*/}
                  <div style={myStyle}>
                    <AddToDo addToDo={this.addToDo} />
                    <Todos
                      todos={this.state.todos}
                      completeToDo={this.completeToDo}
                      deleteToDo={this.deleteToDo}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            {/* When a route is mapped with only one component it can simply be binded as below. */}
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const myStyle = {
  margin: "5px",
  padding: "10px",
  borderWidth: "10px",
  borderStyle: "solid",
  borderColor: "#a5b9e9",
  borderRadius: "19px",
  MozBorderRadius: "19px",
  WebkitBorderRadius: "19px",
};

export default App;
