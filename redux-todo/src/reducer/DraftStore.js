import actionType from '../action/acitonType'

// class TodoDraftStore extends ReduceStore {
//     constructor () {
//         super(dispatcher)
//     }
//
//     getInitialState () {
//         return ''
//     }
//
//     reduce (state, action) {
//         switch (action.type) {
//             case actionType.addTodo:
//                 return ''
//
//             case actionType.updateDraft:
//                 return action.text
//
//             default:
//                 return state
//         }
//     }
// }

const TodoDraftReducer = (state={draft: ''}, action) => {
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
