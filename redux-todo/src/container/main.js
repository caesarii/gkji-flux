import React, {Component} from 'react'
import {createStore, combineReducers} from 'redux'
import HeaderView from '../view/header'
import action from '../action/action'
import TodoReducer from '../reducer/TodoStore'
import editReducer from '../reducer/EditStore'

const reducer = combineReducers({TodoReducer, editReducer})
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
            this.setState(store.getState())
            console.log('new state', store.getState())
        })
        
        const onToggleAllTodos = () => {
            store.dispatch(action.toggleAllTodos())
        }
        
        const onDeleteTodo = () => {
            store.dispatch(action.deleteTodo())
        }
        
        const onEditTodo = () => {
            store.dispatch(action.editTodo())
        }
        
        const onStartEditingTodo = () => {
            store.dispatch(action.startEditTodo())
        }
        
        const onStopEditingTodo = () => {
            store.dispatch(action.stopEditTodo())
        }
        
        const onToggleTodo = () => {
            store.dispatch(action.onToggleTodo)
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
          <HeaderView {...state} {...dispatchers}/>
        )
    }
}

export default Main