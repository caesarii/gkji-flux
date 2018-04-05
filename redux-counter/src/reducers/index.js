import actionTypes from '../action/actionTypes';

const counterReducer = (state = {current: 1}, action) => {
    console.log('reduce', action)
    switch (action.type) {
        case actionTypes.increase:
            return {current: action.num + 1}
        case actionTypes.decrease:
            return {current: action.num - 1}
        default:
            return state;
    }
};

export default counterReducer