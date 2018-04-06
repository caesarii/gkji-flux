

import {ReduceStore} from 'flux/utils';
import actionType from '../action/acitonType';
import dispatcher from '../dispatcher/index';

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case actionType.addTodo:
        return '';

      case actionType.updateDraft:
        return action.text;

      default:
        return state;
    }
  }
}

export default new TodoDraftStore();
