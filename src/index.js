import React from "react"
import ReactDOM from "react-dom"
//component file
//import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import App from "./functionBased/App"

/* ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>, document.getElementById("root")) */

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)