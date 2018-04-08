import React, {Component} from 'react'

import {createStore, } from 'redux'
import HeaderView from '../view/header'
import action from '../action/action'
import TodoReducer from '../reducer/TodoStore'

const store = createStore(TodoReducer)

class footer extends Component {
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
        
        const onDeleteCompletedTodos = () => {
            store.dispatch(action.onDeleteCompletedTodos)
        }
        
        
        const dispatchers = {onDeleteCompletedTodos, }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <HeaderView {...state} {...dispatchers}/>
        )
    }
}

export default footer