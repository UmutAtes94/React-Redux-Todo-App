import React from "react";
import { connect } from "react-redux";
import { deleteTodoItem, completeTodoItem } from "../action/action";

import "../style.css"

const TodoList = (props) => {

    const onClickDeleteButton = (id) => {
        props.deleteTodoItem(id);
    }

    const markAsComplete = (id) =>{
        props.completeTodoItem(id)
    }

    return(
        <div className="todoList">
            <ul className="list">
                {
                    props.todos.map((todo) => {
                        return (
                            <li
                                className={`${todo.isComplete ? "checked" : ""}`}
                                key={todo.id}
                                onClick={() => markAsComplete(todo.id)}
                            >
                                {todo.text}
                                <span onClick={() => onClickDeleteButton(todo.id)} className="close">x</span>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodoItem: (id) => { dispatch(deleteTodoItem(id)) },
        completeTodoItem: (id) => {dispatch(completeTodoItem(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);