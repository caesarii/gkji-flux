import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers';
import App from './container';

const loggerMiddleware = createLogger();

const store = createStore(
    reducers
    // applyMiddleware(
    //     thunkMiddleware,
    //     loggerMiddleware
    // )
);


render(
    <App store={store} />,
    document.getElementById('root')
);
