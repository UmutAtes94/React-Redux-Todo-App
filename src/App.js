import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./style.css"

const App = () => {
    return(
        <div className="container">
            <div id="header">
                <h2>TODO LIST</h2>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    )
}

export default App;