import React, { Component } from 'react'

class TodoItem extends Component {

    render() {
        console.log(this.props.todo)
        const {id, title, complete} = this.props.todo
        return (
            <div>
                <input type="checkbox" defaultChecked={complete} onChange={this.props.completeToDo.bind(this, id)} />
                {" "}
                {title}
                <button onClick={this.props.deleteToDo.bind(this,id)} style={buttonStyle}>Delete</button>
            </div>
        )
    }
}

const buttonStyle= {
    background : "#ff000",
    colour : '#fff00',
    border: "none",
    borderRadius: "10px",
    padding:'5px',
    margin:'5px',
    cursor:'pointer',
    float: "center",
    flex: "10"
}
export default TodoItem