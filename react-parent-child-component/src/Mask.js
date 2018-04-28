/**
 * 提示框使用实例
 * @param {boolean} autoClose
 * @param {string} text
 * @param {function} status 传递 Mask 显示状态的值给父组件
 * <Mask autoClose={true} text={'提示'} status={this.maskStatus} />
 */
import React, { Component } from 'react'
const log = console.log

class Mask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: true
        }
        this.close = this.close.bind(this)
    }

    // 点击弹窗或者弹窗以为的部分，关闭弹窗
    // 同时传递弹窗现在的显示与否的值给父组件
    close() {
        this.setState({display: false})
        this.props.status(false)
        log('子组件 maskStatus 传出去了')
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