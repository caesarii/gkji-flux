import actionType from '../action/acitonType'

const TodoEditReducer = (state='', action) => {
    switch (action.type) {
        case actionType.startEditTodo:
            return action.data
        
        case actionType.stopEditTodo:
            return ''
        
        default:
            return state
    }
}

export default TodoEditReducer
