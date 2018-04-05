import actionCreator from '../action/index'
import AppView from '../components/counter'
import actionType from '../action/actionTypes'
import React, { Component } from 'react'


class App extends Component {
    constructor (props) {
        super(props)
        this.store = props.store
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
        
        const onClickCounter = (type, number) => {
            if (type === actionType.increase) {
                store.dispatch(actionCreator.increaseNumber(number))
            } else if (type === actionType.decrease) {
                store.dispatch(actionCreator.decreaseNumber(number))
            }
        }
        
        const dispatchers = {onClickCounter, }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <AppView {...state} {...dispatchers}/>
        )
    }
}


export default App