import React from "react"
import styles from "./TodoItem.module.css"

//class based component
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    //Destructuring
    const { completed, id, title } = this.props.todo

    return (
      <li className={styles.item}>
        <input
          //You can name the styles object anything you want. Also, note how you name a class with more than one word (e.g .new-class). For this, it is recommended you use camelCase (i.e .newClass). But if you prefer to have a hyphen in your class selector, then you should use the bracket notation (for instance, styles['new-class']) to reference the selector inside the .js file.
          type="checkbox" className={styles['checkbox']}
          checked={this.props.todo.completed}
          //onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        <span 
        //style={this.props.todo.completed ? completedStyle : null}>
          style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    )
  }
}
//function component
/*
function TodoItem(props) {
    return <li>{props.todo.title}</li>
}*/

export default TodoItem