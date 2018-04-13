import actionTypes from '../action/actionTypes'
import {ReduceStore} from 'flux/utils'
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

// 如果仍然有 dispatcher 意味着就要 reducer, 到头来只是被 flux 中的各个部分放到一个对象中进行管理
// 完全脱离 flux, 以面向对象的方式进行封装
class Counter {
    constructor() {
        this._states = {current: 1}
    }
    
    // 返回所有状态
    states() {
        return this._states
    }
    
    increase() {
        const state = this._states
        state.current ++
    }
    
    decrease() {
        const state = this._states
        state.current --
    }
}

export default new Counter()