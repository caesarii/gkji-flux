
import AppView from './view/app'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'

const store = createStore(reducer)

ReactDOM.render(
    <AppView />,
    document.getElementById('root')
)