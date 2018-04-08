
import React from 'react'

import './index.css'
function Header(props) {
    return (
        <header className='header'>
            <h1 className='title'>Todos</h1>
            <NewTodo {...props}/>
        </header>
    )
}

function NewTodo(props) {
    const ENTER_KEY_CODE = 13
    const {draft, onAdd, onUpdateDraft} = props

    // const addTodo = () => {
    //     onAdd(draft)
    // }
    const onChange = (e) => {
        onUpdateDraft(e.target.value)
    }
    const onBlur = () => {
        onAdd(draft)
    }
    const onKeyDown = (e) => {
        if(e.keyCode === ENTER_KEY_CODE) {
            onAdd(draft)
        }
    }
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


export default Header