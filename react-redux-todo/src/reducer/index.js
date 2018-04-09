import {combineReducers} from 'redux'
import DraftReducer from './DraftReducer'
import EditReducer from './EditReducer'
import TodoReducer from './TodoReducer'

const AppReducer = combineReducers({draft: DraftReducer, editing: EditReducer, todos: TodoReducer})
export default AppReducer