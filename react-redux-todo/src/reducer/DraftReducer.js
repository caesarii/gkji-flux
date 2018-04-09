import actionType from '../action/acitonType'

const TodoDraftReducer = (state='', action) => {
    console.log('draft reduce', action)
    switch (action.type) {
        case actionType.addTodo:
            return ''
        
        case actionType.updateDraft:
            return action.data
        
        default:
            return state
    }
}

export default TodoDraftReducer
