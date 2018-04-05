import {combineReducers} from 'redux';
import actionTypes from '../action/actionTypes';

const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case actionTypes.increase:
            return action.num + 1;
        case actionTypes.decrease:
            return action.num - 1;
        default:
            return state;
    }
};

export default combineReducers({
    counterState: counterReducer
});