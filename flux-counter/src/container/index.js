import {Container} from '../flux/index'
import action from '../action/index'
import AppView from '../components/counter'
import React, { Component } from 'react'
import counterStore from '../store'
import actionType from '../action/actionTypes'


class App extends Component {
    static getStores() {
        return [
          counterStore
        ]
    }
    
    static calculateState(prev) {
        const newState = counterStore.getState()
        console.log('new state', newState)
        return {
          ...newState,
        }
    }
    
    render () {
        const onClickCounter = (type, number) => {
            if (type === actionType.increase) {
                action.increaseNumber(number)
            } else if (type === actionType.decrease) {
                action.decreaseNumber(number)
            }
        }
        
        const dispatchers = {
            onClickCounter: onClickCounter
        }
        const state = this.state
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <AppView {...state} {...dispatchers} />
        )
    }
}

export default Container.create(App)