import React, { Component } from 'react'

class TodoItem extends Component {

    textStyle ={
        textDecoration : this.props.todo.completed ? "line-through" : "none"
    }

    buttonStyle= {
        background : "#ff000",
        colour : '#fff00',
        border: "none",
        borderRadius: "10px",
        padding:'5px',
        margin:'5px',
        cursor:'pointer',
        float: "center",
        flex: "10",
    }

    render() {
        console.log(this.props.todo)
        const {id, title, completed} = this.props.todo
        return (
            <div style={this.textStyle}>
                <input type="checkbox" defaultChecked={completed} onChange={this.props.completeToDo.bind(this, id)} />
                {" "}
                {title}
                <button onClick={this.props.deleteToDo.bind(this,id)} style={this.buttonStyle}>Delete</button>
            </div>
        )
    }
}

export default TodoItem