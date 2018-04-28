import React from 'react'
import Mask from './Mask'
const log = console.log

class AppView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        log('接收子组件 maskStatus 的值')
        this.setState(prev => {
            const show = !prev.show
            return {show}
        })
    }
    
    render () {
        return (
          <div>
              <button onClick={this.toggle}>click me</button>
              {this.state.show && <Mask text={'我是子组件-弹窗'} toggle={this.toggle} /> }
          </div>
        )
    }
}


export default AppView