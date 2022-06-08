import React from "react"
import styles from "./TodoItem.module.css"

//class based component
class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
    console.log("edit mode activated")
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    //Destructuring
    const { completed, id, title } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item} >
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        </div>
        <input
          //style={{display:"block"}} 
          style={editMode}
          type="text" className={styles.textInput}
          value={title}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
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