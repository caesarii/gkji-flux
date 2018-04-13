import React, { PropTypes } from 'react'
import store from '../store'
const {increase, decrease} = store

const AppView = (props) => {
    // 从这里看出 react 视图的更新, 既是 appContainer 中进行多次 setState 这里可能只更新一次(快速点击)
    const {current} = props
    return (
      <div>
          <div>Current: {current}</div>
          <button onClick={e => {increase()}}>+1</button>
          <button onClick={e => {decrease()}}>-1</button>
      </div>
    )
}

AppView.propsType = {
    current: PropTypes.string.isRequired,
    onClickCounter: PropTypes.func
}

export default AppView