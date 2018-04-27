import React from 'react'
import './index.css'

function Header (props) {
    return (
      <header className='header'>
          <h1 className='title'>Todos</h1>
          <NewTodo {...props}/>
      </header>
    )
}

class NewTodo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            draft: '',
        }
    }
    
    // 编辑
    onChange = (e) => {
        this.setState({ draft: e.target.value })
    }
    onOver = () => {
        this.setState({ draft: '' })
    }
    // 停止编辑
    onBlur = () => {
        this.props.onAdd(this.state.draft)
        this.onOver()
    }
    
    // 编辑完成
    onKeyDown = (e) => {
        const ENTER_KEY_CODE = 13
        if (e.keyCode === ENTER_KEY_CODE) {
            this.props.onAdd(this.state.draft)
            this.onOver()
            
        }
    }
    
    render () {
        const { state, onBlur, onChange, onKeyDown } = this
        const { draft } = state
        return (
          <input
            className="new-todo"
            type="text"
            autoFocus='autoFocus'
            placeholder="What needs to be done?"
            value={draft}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        )
    }
}

export default Header