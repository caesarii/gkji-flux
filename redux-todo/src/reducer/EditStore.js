import actionType from '../action/acitonType'
//
// class TodoEditStore extends ReduceStore {
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
//             case actionType.startEditTodo:
//                 return action.id
//
//             case actionType.stopEditTodo:
//                 return ''
//
//             default:
//                 return state
//         }
//     }
// }

const TodoEditReducer = (state={editing: ''}, action) => {
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
