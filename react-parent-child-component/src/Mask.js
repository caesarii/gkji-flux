/**
 * 提示框使用实例
 * @param {boolean} autoClose
 * @param {string} text
 * @param {function} status 传递 Mask 显示状态的值给父组件
 * <Mask text={'提示'} />
 */
import React, { Component } from 'react'

class Mask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: true
        }
        this.close = this.close.bind(this)
    }

    close() {
        this.setState({display: false})
        this.props.status(false)
    }

    render() {
        return (
            this.state.display &&
            <div className="notic-layer" onClick={this.close}>
                <div className="table-cell">
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}

export default Mask;