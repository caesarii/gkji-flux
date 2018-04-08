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
        this.state = this.store.getState()
    }
    
    render () {
        const {store, state} = this
        
        // update
        store.subscribe(() => {
            this.setState(store.getState())
            console.log('new state', store.getState())
        })
        
        // const onClickCounter = (type, number) => {
        //     if (type === actionType.increase) {
        //         store.dispatch(actionCreator.increaseNumber(number))
        //     } else if (type === actionType.decrease) {
        //         store.dispatch(actionCreator.decreaseNumber(number))
        //     }
        // }
        //
        const onAdd = () => {
            store.dispatch(action.onAdd)
        }
        
        const onUpdateDraft = () => {
            store.dispatch(action.onUpdateDraft)
        }
        
        const dispatchers = {onAdd, onUpdateDraft, }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <HeaderView {...state} {...dispatchers}/>
        )
    }
}

export default Header