import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    title: "",
  }

  changeValue = (e) => {
    // this.setState({ title: e.target.value });
    // Instead of hard coding and setting the state value, set it dynamically by using the same name in start and the input name.
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    //   The preventDefault() method cancels the event if it is cancelable, 
    //      meaning that the default action that belongs to the event will not occur. 
    //   For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="Add To do item.."
          value={this.state.title}
          onChange={this.changeValue}
        ></input>
        <input type="submit" value="Submit" onClick={this.onSubmit}></input>
      </form>
    )
  }
}

export default AddToDo;
