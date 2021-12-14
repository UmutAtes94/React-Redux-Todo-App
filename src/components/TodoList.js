import React from "react";
import { connect } from "react-redux";

const TodoList = ({todos}) => {

    console.log(todos)

    return(
        <div>
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                {todo.text}
                                <span>x</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { todos } = state;
    return {
        todos
    }
}

export default connect(mapStateToProps)(TodoList);