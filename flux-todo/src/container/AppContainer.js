
import AppView from '../view/app'
import {Container} from 'flux/utils'
import action from '../action/action'
import DraftStore from '../store/DraftStore'
import EditStore from '../store/EditStore'
import TodoStore from '../store/TodoStore'

function getStores() {
  return [
    EditStore,
    DraftStore,
    TodoStore,
  ]
}

function getState() {
  return {
    draft: DraftStore.getState(),
    editing: EditStore.getState(),
    todos: TodoStore.getState(),

    onAdd: action.addTodo,
    onDeleteCompletedTodos: action.deleteCompletedTodos,
    onDeleteTodo: action.deleteTodo,
    onEditTodo: action.editTodo,
    onStartEditingTodo: action.startEditTodo,
    onStopEditingTodo: action.stopEditTodo,
    onToggleAllTodos: action.toggleAllTodos,
    onToggleTodo: action.toggleTodo,
    onUpdateDraft: action.updateDraft,
  }
}

export default Container.createFunctional(AppView, getStores, getState)