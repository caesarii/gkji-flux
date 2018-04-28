import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Counter extends React.Component {
    
    render () {
        return (
          <div>
              <button onClick={this.handleIncrease}>+</button>
              {this.props.store.count}
              <button onClick={this.handleDecrease}>-</button>
          </div>
        )
    }
    
    @action
    handleIncrease = e => {
        const { increase, count } = this.props.store
        increase.call(this.props.store, count)
    }
    
    @action
    handleDecrease = e => {
        const { decrease, count } = this.props.store
        decrease.call(this.props.store, count)
    }
}

export default Counter
