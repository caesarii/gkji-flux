import React, { PropTypes } from 'react'
const log = console.log

class AppView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            current: 1
        }
        this.onClickCounter = this.onClickCounter.bind(this)
    }
    
    onClickCounter(type, value) {
        log('回调有没有调用')
        if(type === 'increase') {
            this.setState((prev) => {
                prev.current += 1
                log('状态有没有按预想的更新', prev.current)
                return {
                    current: prev.current
                }
            })
        } else {
            this.setState((prev) => {
               return {
                    current: --prev.current
                }
            })
        }
    }
    
    render () {
        const {state, onClickCounter} = this
        const {current} = state
        
        log('有没有 render')

        return (
          <div>
              <div>Current: {current}</div>
              <button onClick={e => {onClickCounter('increase', current)}}>+1</button>
              <button onClick={e => {onClickCounter('decrease', current)}}>-1</button>
          </div>
        )
    }
}


export default AppView