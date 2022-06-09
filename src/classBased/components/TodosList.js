import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem setUpdate={this.props.setUpdate} handleChangeProps={this.props.handleChangeProps} key={todo.id} todo={todo}  deleteTodoProps={this.props.deleteTodoProps}/>

                    //<li  key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        )
    }
}

export default TodosList