//* we use reducer to change state

const initialState = {
    todos: [
        {id: 1, text: "Go Shopping", isComplete: false},
        {id: 2, text: "Walk the Dog", isComplete: true}
    ]
}

//* reducer is a function which has 2 parameters state and action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload,
                        isComplete: false
                    }
                ]
            }

        case 'DELETE_ITEM':
            let newTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: newTodos
            }

        case 'COMPLETE_ITEM':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, isComplete: !todo.isComplete }
                        : todo)
            }

        default:
            return state;
    }
}

export default reducer;