
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
    const {draft, addTodo, updateDraft} = props

    // const addTodo = () => {
    //     onAdd(draft)
    // }
    const onChange = (e) => {
        updateDraft(e.target.value)
    }
    const onBlur = () => {
        // console.log('error', typeof onAdd, onAdd)
        addTodo(draft)
    }
    const onKeyDown = (e) => {
        if(e.keyCode === ENTER_KEY_CODE) {
            addTodo(draft)
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