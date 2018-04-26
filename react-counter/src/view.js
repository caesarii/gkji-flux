import React, { PropTypes } from 'react'


class AppView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            current: 1
        }
        this.onClickCounter = this.onClickCounter.bind(this)
    }
    
    onClickCounter(type, value) {
        
        if(type === 'increase') {
            this.setState((prev) => {
                return {
                    current: ++prev.current
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
                console.log('cuu', current)

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