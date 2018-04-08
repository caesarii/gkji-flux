import React, {Component} from 'react'
import {createStore, } from 'redux'
import HeaderView from '../view/header'
import action from '../action/action'
import TodoDraftReducer from '../reducer/DraftStore'

const store = createStore(TodoDraftReducer)

class Header extends Component {
    constructor (props) {
        super(props)
        this.store = store
        // 初始状态
        this.state = {draft: this.store.getState()}
    }
    
    render () {
        const {store, state} = this
        
        // update
        store.subscribe(() => {
            const newState = {draft: store.getState()}
            this.setState(newState)
            console.log('header new state', newState)
        })
        
        const onAdd = (draft) => {
            console.log('onAdd')
            store.dispatch(action.addTodo(draft))
        }
        
        const onUpdateDraft = (draft) => {
            store.dispatch(action.updateDraft(draft))
        }
        
        const dispatchers = {onAdd, onUpdateDraft, }
        console.log('state', state)
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <HeaderView {...state} {...dispatchers}/>
        )
    }
}

export default Header