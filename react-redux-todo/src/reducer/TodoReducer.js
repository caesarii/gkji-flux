import Counter from './Counter'
import Immutable from 'immutable'
import Todo from './Todo'
import ationType from '../action/acitonType'

const TodoReducer = (state = Immutable.OrderedMap(), action) => {
    console.log('todos reducer', state, action)
    switch (action.type) {
        case ationType.addTodo:
            // Don't add todos with no text.
            
            if (!action.data) {
                return state
            }
            
            const id = Counter.increment()
            state = state.set(id, new Todo({
                  id,
                  text: action.data,
                  complete: false,
              })
            )
            console.log('staetttttt', state)

            return state
        
        case ationType.deleteCompletedTodo:
            return state.filter(todo => !todo.complete)
        
        case ationType.deleteTodo:
            return state.delete(action.data)
        
        case ationType.editTodo:
            return state.setIn([action.data, 'text'], action.data)
        
        case ationType.toggleAllTodo:
            const areAllComplete = state.every(todo => todo.complete)
            return state.map(todo => todo.set('complete', !areAllComplete))
        
        case ationType.toggleTodo:
            return state.update(
              action.data,
              todo => todo.set('complete', !todo.complete),
            )
        
        default:
            return state
    }
}
export default TodoReducer
