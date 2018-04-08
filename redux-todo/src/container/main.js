import React, {Component} from 'react'
import {createStore, combineReducers} from 'redux'
import MainView from '../view/main'
import action from '../action/action'
import TodoReducer from '../reducer/TodoReducer'
import EditReducer from '../reducer/EditReducer'

const reducer = combineReducers({TodoReducer, EditReducer})
const store = createStore(reducer)

class Main extends Component {
    constructor (props) {
        super(props)
        this.store = store
        // 初始状态
        this.state = this.store.getState()
    }
    
    render () {
        const {store, state} = this
        
        // update
        store.subscribe(() => {
            this.setState({editing: store.getState()})
            console.log('main new state', store.getState())
        })
        
        const onToggleAllTodos = () => {
            store.dispatch(action.toggleAllTodos())
        }
        
        const onDeleteTodo = (id) => {
            store.dispatch(action.deleteTodo(id))
        }
        
        const onEditTodo = (id, draft) => {
            store.dispatch(action.editTodo(id, draft))
        }
        
        const onStartEditingTodo = (id) => {
            store.dispatch(action.startEditTodo(id))
        }
        
        const onStopEditingTodo = () => {
            store.dispatch(action.stopEditTodo())
        }
        
        const onToggleTodo = (id) => {
            store.dispatch(action.onToggleTodo(id))
        }
        
        
        const dispatchers = {
            onToggleAllTodos,
            onDeleteTodo,
            onEditTodo,
            onStartEditingTodo,
            onStopEditingTodo,
            onToggleTodo,
        }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <MainView {...state} {...dispatchers}/>
        )
    }
}

export default Main