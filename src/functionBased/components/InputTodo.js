import React, { useState } from "react"

const InputTodo = props => {
    //console.log(useState("hello"))
    //JavaScript array destructuring.
    const [title, setTitle] = useState("")

    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("")
        } else {
            alert("Please write item")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}
export default InputTodo

/*
Unlike the class-based approach. Anytime you have an object as the state value, React will not merge the state returned by the useState Hook with that of the update passed to it.
Meaning it doesn’t merge the old and new state. Instead, it overrides the entire state with that of the current.
*/

/*
import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    fName: "",
    lastName: "",
  })

  const onChange = e => {
    setInputText(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add last name"
          value={inputText.lastName}
          name="lastName"
          onChange={onChange}
        />

        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )
}

export default InputTodo
*/