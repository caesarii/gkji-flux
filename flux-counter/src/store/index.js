import actionTypes from '../action/actionTypes'
import {ReduceStore} from '../flux/index'
import dispatcher from '../action/dispatcher'


class CounterStore extends ReduceStore {
    constructor() {
        super(dispatcher)
    }
    
    getInitialState() {
        return {
            current: 1
        }
    }
    
    reduce(state, action) {
        console.log('reduce', action)
        switch (action.type) {
            case actionTypes.increase:
                return {current: action.num + 1}
            case actionTypes.decrease:
                return {current: action.num - 1}
            default:
                return state;
        }
    }
}


export default new CounterStore()
