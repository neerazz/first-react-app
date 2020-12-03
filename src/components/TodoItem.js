import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        console.log(this.props.todo)
        return (
            <div>
                <h4 className="item">{this.props.todo.title}</h4>
            </div>
        )
    }
}
