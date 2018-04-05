import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Router, Route, hashHistory} from 'react-router'

import reducers from './reducers';
import App from './container';

const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
