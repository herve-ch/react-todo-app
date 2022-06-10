import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos: []
    };

    /*componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => {console.log(response); return response.json()})
        .then(data => this.setState({ todos: data }));
    }*/

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            /* Calling the setState() in this method would trigger an extra rendering. That is, the render() will be called twice. Though it’s fine because it will happen before the browser updates the view. However, we should always use with caution or simply avoid it if you could to prevent any performance issue.
Since in our case, we want to display the stored item(s) after component render, we can simply assign the item(s) directly as the initial state.*/
            this.setState({
                todos: loadedTodos
            })
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    /*handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };*/
    handleChange = id => {
        /*this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed
              }
              return todo
            }),
          }))*/
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
        /*avec return sans parenthese, mettre parenthese pour omettre le premier return*/
        /*  
        this.setState(prevState => {
        return {
            todos: prevState.todos.map(todo => {
            if (todo.id === id) {
                return {
                ...todo,
                completed: !todo.completed,
                }
            }
            return todo
            }),
        }
        })*/
    };
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }

    render() {
        return (
            /*<ul>
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>*/
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList setUpdate={this.setUpdate} todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
                </div>
            </div>
        );



    }
}
export default TodoContainer