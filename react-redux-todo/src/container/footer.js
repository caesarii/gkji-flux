import React, {Component} from 'react'

import {connect, } from 'react-redux'
import FooterView from '../view/footer'
import action from '../action/action'
import TodoReducer from '../reducer/TodoReducer'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCompletedTodos() {
            dispatch(action.deleteCompletedTodos())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FooterView)
//
// class footer extends Component {
//     constructor (props) {
//         super(props)
//         this.store = store
//         // 初始状态
//         this.state = {todos: this.store.getState()}
//     }
//
//     render () {
//         const {store, state} = this
//
//         // update
//         store.subscribe(() => {
//             this.setState({todo: store.getState()})
//             console.log('new state', store.getState())
//         })
//
//
//
//
//         const dispatchers = {onDeleteCompletedTodos, }
//
//         // 以这种形式传递 state 和 dispatchers 模仿 mapStateToProps, mapDispatcherToProps
//         return (
//           <FooterView {...state} {...dispatchers}/>
//         )
//     }
// }
//
// export default footer