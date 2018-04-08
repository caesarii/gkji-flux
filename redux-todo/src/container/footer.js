import React, {Component} from 'react'

import {createStore, } from 'redux'
import FooterView from '../view/footer'
import action from '../action/action'
import TodoReducer from '../reducer/TodoReducer'

const store = createStore(TodoReducer)

class footer extends Component {
    constructor (props) {
        super(props)
        this.store = store
        // 初始状态
        this.state = {todos: this.store.getState()}
    }
    
    render () {
        const {store, state} = this
        
        // update
        store.subscribe(() => {
            this.setState({todo: store.getState()})
            console.log('new state', store.getState())
        })
        
        const onDeleteCompletedTodos = () => {
            store.dispatch(action.deleteCompletedTodos())
        }
        
        
        const dispatchers = {onDeleteCompletedTodos, }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <FooterView {...state} {...dispatchers}/>
        )
    }
}

export default footer