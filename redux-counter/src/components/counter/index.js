import React, { PropTypes } from 'react'
import actionType from '../../action/actionTypes'
// TODO impoert 解包时没有创建变量
const {increase, decrease} = actionType

const AppView = (props) => {
    // 从这里看出 react 视图的更新, 既是 appContainer 中进行多次 setState 这里可能只更新一次(快速点击)
    console.log('view update', props)
    const {current, onClickCounter} = props
    return (
      <div>
          <div>Current: {current}</div>
          <button onClick={e => {onClickCounter(increase, current)}}>+1</button>
          <button onClick={e => {onClickCounter(decrease, current)}}>-1</button>
      </div>
    )
}

AppView.propsType = {
    current: PropTypes.string.isRequired,
    onClickCounter: PropTypes.func
}

export default AppView