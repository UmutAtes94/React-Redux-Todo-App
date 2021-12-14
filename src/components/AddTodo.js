import React, {useState} from "react";
import { connect } from "react-redux";
import { addTodoItem } from "../action/action";

const AddTodo = (props) => {
    const [text, setText] = useState("");
    const onButtonClick = () => {
        props.addTodoItem(text)
        console.log(text)
    }
    return (
        <div>
            <input
                placeholder="add todo"
                value={text}
                onChange={e => setText(e.target.value)} 
            />
            <button onClick={onButtonClick}>Add Todo</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (text) => { dispatch(addTodoItem(text)) }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);