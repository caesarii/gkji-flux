import React from 'react'
import Mask from './Mask'
import './Mask.css'
const log = console.log

class AppView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: false
        }
        this.onShow = this.onShow.bind(this)
    }

    onShow(maskStatus) {
        log('接收子组件 maskStatus 的值')
        this.setState({show: maskStatus})
    }

    render () {
        return (
          <div>
              <button onClick={this.onShow}>click me</button>
              {this.state.show && <Mask text={'我是子组件-弹窗'} status={this.onShow} /> }
          </div>
        )
    }
}


export default AppView