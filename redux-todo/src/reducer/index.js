import {combineReducers} from 'redux'
import DraftStore from './DraftStore'
import EditStore from './EditStore'
import TodoStore from './TodoStore'

export default combineReducers({
    DraftStore,
    EditStore,
    TodoStore,
})

