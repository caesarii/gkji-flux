import React, { Component } from 'react'
import Immutable from 'immutable'
import Counter from '../../utils/Counter'
import Todo from '../../utils/Todo'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import './index.css'

class AppView extends Component {
    constructor (props) {
        super(props)
        const todos = []
        this.state = {
            todos: todos,
            editing: false,
            draft: null,
        }
        
    }
    
    onAdd = (text) => {
        if (text === '') {
            return
        }
        const id = Counter.increment()
        this.setState(prev => {
            const todo = new Todo({
                id,
                text: text,
                complete: false,
            })
            
            prev.todos.push(todo)
            return prev.todos
        })
    }
    
    onDeleteTodo = (id) => {
        this.setState(prev => {
            let todos = prev.todos
            todos = todos.filter(t => {
                if(t.id !== id) {
                    return t
                }
            })
            return {todos}
        })
    }
    
    onEditTodo = (id, text) => {
        this.setState(prev => {
            const todos = prev.todos
            todos.forEach(t => {
                if(t.id === id) {
                    t.text = text
                }
            })
            return {todos}
        })
    }
    
    onToggleTodo = (id) => {
        this.setState(prev => {
            let todos = prev.todos
            todos = todos.map(t => {
                if(t.id === id) {
                    const completed = t.complete
                    t.complete = !completed
                }
                return t
            })
            
            return {todos}
        })
    }
    
    onToggleAllTodos = () => {
        this.setState(prev => {
            const todos = prev.todos.map(t => {
                t.complete = !t.complete
                return t
            })
            return {todos}
        })
    }
    
    onDeleteCompletedTodos = () => {
        this.setState(prev => {
            const todos = prev.todos.filter(t => {
                if(!t.complete) {
                    return t
                }
            })
            return {todos}
        })
    }
    
    render () {
        const { todos } = this.state
        const { onAdd, onUpdateDraft, onDeleteTodo, onEditTodo, onToggleTodo, onToggleAllTodos, onDeleteCompletedTodos} = this
        const props = {
            todos,
            onAdd,
            onUpdateDraft,
            onToggleAllTodos,
            onDeleteTodo,
            onEditTodo,
            onToggleTodo,
            onDeleteCompletedTodos,
        }
        
        return (
          <div className="container">
              <div className="todoapp">
                  <Header {...props} />
                  <Main {...props} />
                  <Footer {...props} />
              
              </div>
              <div className="info">
                  <p>Double-click to edit a todo</p>
                  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
              </div>
          </div>
        
        )
    }
}

export default AppView
