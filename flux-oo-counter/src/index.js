import React from 'react';
import {render} from 'react-dom';
import App from './components';
import store from './store'

const states = store.states()
render(
    <App {...states}/>,
    document.getElementById('root')
);
