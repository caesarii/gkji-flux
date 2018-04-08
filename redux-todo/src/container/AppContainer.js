
import AppView from '../view/app'
import {Container} from 'flux/utils'
import action from '../action/action'
import DraftStore from '../reducer/DraftStore'
import EditStore from '../reducer/EditStore'
import TodoStore from '../reducer/TodoStore'
import actionType from '../../../redux-counter/src/action/actionTypes'
import actionCreator from '../../../redux-counter/src/action'

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
    onStopEditingTodo: action.stopEditingTodo,
    onToggleAllTodos: action.toggleAllTodos,
    onToggleTodo: action.toggleTodo,
    onUpdateDraft: action.updateDraft,
  }
}


class App extends Component {
    constructor (props) {
        super(props)
        this.store = props.store
        // 初始状态
        this.state = this.store.getState()
    }
    
    render () {
        const {store, state} = this
        
        // update
        store.subscribe(() => {
            this.setState(store.getState())
            console.log('new state', store.getState())
        })
        
        const onClickCounter = (type, number) => {
            if (type === actionType.increase) {
                store.dispatch(actionCreator.increaseNumber(number))
            } else if (type === actionType.decrease) {
                store.dispatch(actionCreator.decreaseNumber(number))
            }
        }
        
        const dispatchers = {onClickCounter, }
        
        // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
        return (
          <AppView {...state} {...dispatchers}/>
        )
    }
}

export default Container.createFunctional(AppView, getStores, getState)