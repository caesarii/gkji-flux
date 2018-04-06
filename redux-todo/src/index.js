
import AppContainer from './container/AppContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'

const store = createStore(reducer)

ReactDOM.render(
    <AppContainer store={store}/>,
    document.getElementById('root')
)