import actionType from './acitonType'

const Actions = {
    addTodo (text) {
        return {
            type: actionType.addTodo,
            data: text,
        }
    },
    
    deleteCompletedTodos () {
        return {
            type: actionType.deleteCompletedTodo,
        }
    },
    
    deleteTodo (id) {
        return {
            type: actionType.deleteTodo,
            data: id,
        }
    },
    
    editTodo (id, text) {
        return {
            type: actionType.editTodo,
            id,
            data: text,
        }
    },
    
    startEditingTodo (id) {
        return {
            type: actionType.startEditTodo,
            data: id,
        }
    },
    
    stopEditingTodo () {
        return {
            type: actionType.stopEditTodo,
        }
    },
    
    toggleAllTodos () {
        return {
            type: actionType.toggleAllTodo,
        }
    },
    
    toggleTodo (id) {
        return {
            type: actionType.toggleTodo,
            data: id,
        }
    },
    
    updateDraft (text) {
        return {
            type: actionType.updateDraft,
            data: text,
        }
    },
}

export default Actions
