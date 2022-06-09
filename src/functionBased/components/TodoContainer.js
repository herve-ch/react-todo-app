import React, { useState, useEffect } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { v4 as uuidv4 } from "uuid"

const TodoContainer = () => {
  const [todos, setTodos] = useState([])

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  /*This array let you specify some dependencies.
You can also leave it empty BUT ONLY if your effect doesn’t use any value from the rendered scope. In other words, the effect does not use values from inside your component.
Should in case you are using any of the component value (like props, state or even functions) in the effect, you must add them as dependencies in the array.
This way, if and only if any of the value(s) changes between re-renders, React will re-run the effect. Else it skips applying the effect.*/

/*
  useEffect(() => {
    console.log("run every update")
  })
  
  useEffect(() => {
    console.log(" This is synonymous to the componentDidMount in the class component.")
  }, []);
*/

useEffect(() => {
    console.log("test run")
  
    // getting stored items
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
  
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])
  
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}

export default TodoContainer