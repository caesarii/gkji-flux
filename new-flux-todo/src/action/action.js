

import actionType from './acitonType';
import dispatcher from '../dispatcher';

const Actions = {
  addTodo(text) {
    dispatcher.dispatch({
      type: actionType.addTodo,
      text,
    });
  },

  deleteCompletedTodos() {
    dispatcher.dispatch({
      type: actionType.deleteCompletedTodo,
    });
  },

  deleteTodo(id) {
    dispatcher.dispatch({
      type: actionType.deleteTodo,
      id,
    });
  },

  editTodo(id, text) {
    dispatcher.dispatch({
      type: actionType.editTodo,
      id,
      text,
    });
  },

  startEditingTodo(id) {
    dispatcher.dispatch({
      type: actionType.startEditTodo,
      id,
    });
  },

  stopEditingTodo() {
    dispatcher.dispatch({
      type: actionType.stopEditTodo,
    });
  },

  toggleAllTodos() {
    dispatcher.dispatch({
      type: actionType.toggleAllTodo,
    });
  },

  toggleTodo(id) {
    dispatcher.dispatch({
      type: actionType.toggleTodo,
      id,
    });
  },

  updateDraft(text) {
    dispatcher.dispatch({
      type: actionType.updateDraft,
      text,
    });
  },
};

export default Actions;
