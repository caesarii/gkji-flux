

import Counter from './Counter'
import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import Todo from './Todo'
import ationType from '../action/acitonType'
import dispatcher from '../dispatcher'

class TodoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ationType.addTodo:
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));

      case ationType.deleteCompletedTodo:
        return state.filter(todo => !todo.complete);

      case ationType.deleteTodo:
        return state.delete(action.id);

      case ationType.editTodo:
        return state.setIn([action.id, 'text'], action.text);

      case ationType.toggleAllTodo:
        const areAllComplete = state.every(todo => todo.complete);
        return state.map(todo => todo.set('complete', !areAllComplete));

      case ationType.toggleTodo:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete),
        );

      default:
        return state;
    }
  }
}

export default new TodoStore();
