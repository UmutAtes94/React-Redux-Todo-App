export const addTodoItem = (text) => {
    console.log("action" + text)
    return {
        type: "ADD_ITEM",
        payload: text
    }
}


export const deleteTodoItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}

export const completeTodoItem = (id) => {
    return {
        type: "COMPLETE_ITEM",
        payload: id
    }
}