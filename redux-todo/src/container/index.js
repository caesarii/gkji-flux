
import {createStore, combineReducers} from 'redux'
import DraftReducer from '../reducer/DraftReducer'
import EditReducer from  '../reducer/EditReducer'
import TodoReducer from  '../reducer/TodoReducer'

const reducer = combineReducers({DraftReducer, EditReducer, TodoReducer})
const store = createStore(reducer)


console.log(store)