
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect, } from 'react-redux'
import AppView from '../view/app'
import action from '../action/action'

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        draft: state.draft,
        editing: state.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    const binds = bindActionCreators(action, dispatch)
    return binds
    
}


export default connect(mapStateToProps, mapDispatchToProps)(AppView)

