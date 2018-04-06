

import {ReduceStore} from 'flux/utils';
import actionType from '../action/acitonType';
import dispatcher from '../dispatcher';

class TodoEditStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case actionType.startEditTodo:
        return action.id;

      case actionType.stopEditTodo:
        return '';

      default:
        return state;
    }
  }
}

export default new TodoEditStore();
