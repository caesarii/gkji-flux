import {combineReducers} from 'redux';
import {
    INCR_NUM,
    DECR_NUM
} from '../constants/actionTypes';

const counterReducer = (state = 1, action) => {
    switch (action.type) {

        case INCR_NUM:
            return action.num + 1;

        case DECR_NUM:
            return action.num - 1;

        default:
            return state;
    }
};

export default combineReducers({
    counterState: counterReducer
});