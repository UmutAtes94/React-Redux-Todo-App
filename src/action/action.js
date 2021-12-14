export const addTodoItem = (text) => {
    console.log("action" + text)
    return {
        type: "ADD_ITEM",
        payload: text
    }
}