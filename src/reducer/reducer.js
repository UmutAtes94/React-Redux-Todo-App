//* we use reducer to change state

const initialState = {
    todos: [
        {id: 1, text: "Alisveris Yap", isComplete: false},
        {id: 2, text: "Yemek Yap", isComplete: false}
    ]
}

//* reducer is a function which has 2 parameters state and action
const reducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch(action.type) {
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
        default:
            return state;
    }
}

export default reducer;