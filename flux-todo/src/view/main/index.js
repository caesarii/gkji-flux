
import React from 'react'
import classnames from 'classnames';
import './index.css'

function Main(props) {
    const {todos} = props
    if(todos.size === 0) {
        return null
    }

    return (
        <section className="main">
            <ToggleBtn {...props}/>
            <TodoList {...props}/>
        </section>
    )

}

function ToggleBtn(props) {
    const {todos, onToggleAllTodos} = props
    const areAllComplete = todos.every((todo) => {
        return todo.completed
    })
    return (
        <div>
            <input
                type="checkbox"
                className="toggle-all"
                checked={areAllComplete ? 'checked' : ''}
                onChange={onToggleAllTodos}
            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        </div>
    )
}

function TodoList(props) {
    
    const {
        todos,
        editing,
        onDeleteTodo,
        onEditTodo,
        onStartEditingTodo,
        onStopEditingTodo,
        onToggleTodo
    }
        = props
    return (
        <ul className="todo-list">
            {[...todos.values()].reverse().map((todo) => {
                return (<TodoItem
                    key={todo.id}
                    editing={editing}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onEditTodo={onEditTodo}
                    onStartEditingTodo={onStartEditingTodo}
                    onStopEditingTodo={onStopEditingTodo}
                    onToggleTodo={onToggleTodo}
                />)
            })}
        </ul>
    )
}

function TodoItem(props) {
    const ENTER_KEY_CODE = 13
    const {editing, todo, onDeleteTodo, onStartEditingTodo, onToggleTodo, onEditTodo, onStopEditingTodo} = props
    const isEditing = editing === todo.id
    const onDelete = () => {
        onDeleteTodo(todo.id)
    }
    const onStartEditing = () => {
        onStartEditingTodo(todo.id)
    }
    const onToggle = () => {
        onToggleTodo(todo.id)
    }
    const onChange = (e) => {
        onEditTodo(todo.id, e.target.value)
    }
    const onKeydown = (e) => {
        if(e.keyCode === ENTER_KEY_CODE) {
            onStopEditingTodo()
        }
    }

    let input = null
    if(isEditing) {

        input =
            <input
                type="text"
                autoFocus={true}
                className="edit"
                value={todo.text}
                onBlur={onStopEditingTodo}
                onChange={onChange}
                onKeyDown={onKeydown}
            />
    }

    return (
        <li
            className={classnames({
                completed: todo.complete,
                editing: isEditing,
            })}
        >
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.complete}
                    onChange={onToggle}
                />
                <label onDoubleClick={onStartEditing}>
                    {todo.text}
                </label>
                <button className="destroy" onClick={onDelete} />
            </div>
            {input}
        </li>
    )
}

export default Main