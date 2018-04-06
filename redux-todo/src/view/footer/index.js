import React from 'react'
import './index.css'

function Footer(props) {
    const {todos, onDeleteCompletedTodos} = props
    if(todos.size === 0) {
        return null
    }
    const remaining = todos.filter((todo) => {
        return !todo.complete
    }).size
    const completed = todos.size - remaining
    const phrase = remaining === 1 ? 'item left' : 'items left'

    let clearCompletedButton = null
    if(completed > 0) {
        clearCompletedButton =
            <button
                className='clear-completed'
                onClick={onDeleteCompletedTodos}
            >
               Clear completed ({completed})
            </button>
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {remaining}
                </strong>
                {phrase}
            </span>
            {clearCompletedButton}
        </footer>
    )
}

export default Footer