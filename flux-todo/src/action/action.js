import actionType from './acitonType'
import dispatcher from '../dispatcher'

const log = console.log
const Actions = {
    addTodo (text) {
        log('add todo')
        dispatcher.dispatch({
            type: actionType.addTodo,
            text,
        })
    },
    
    deleteCompletedTodos () {
        log('delete completed')
        dispatcher.dispatch({
            type: actionType.deleteCompletedTodo,
        })
    },
    
    deleteTodo (id) {
        log('delete todo')
        dispatcher.dispatch({
            type: actionType.deleteTodo,
            id,
        })
    },
    
    editTodo (id, text) {
        log('edit todo')
        dispatcher.dispatch({
            type: actionType.editTodo,
            id,
            text,
        })
    },
    
    startEditTodo (id) {
        log('start edit todo')
        dispatcher.dispatch({
            type: actionType.startEditTodo,
            id,
        })
    },
    
    stopEditTodo () {
        log('stop edit todo')
        dispatcher.dispatch({
            type: actionType.stopEditTodo,
        })
    },
    
    toggleAllTodos () {
        log('toggle all')
        dispatcher.dispatch({
            type: actionType.toggleAllTodo,
        })
    },
    
    toggleTodo (id) {
        log('toggle todo')
        dispatcher.dispatch({
            type: actionType.toggleTodo,
            id,
        })
    },
    
    updateDraft (text) {
        log('update draft')
        dispatcher.dispatch({
            type: actionType.updateDraft,
            text,
        })
    },
}

export default Actions
