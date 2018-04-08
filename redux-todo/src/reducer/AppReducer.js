import actionType from '../action/acitonType'
import Todo from './Todo'
import Counter from './Counter'
import ationType from '../action/acitonType'

const AppReducer = (state={d}, action) => {
    console.log('draft reduce', action)
    switch (action.type) {
        case ationType.addTodo:
            // Don't add todos with no text.
            if (!action.text) {
                return state
            }
            const id = Counter.increment()
            return state.set(id, new Todo({
                id,
                text: action.text,
                complete: false,
            }))
        
        // case actionType.updateDraft:
        //     return action.data
        
        default:
            return state
    }
}

export default AppReducer