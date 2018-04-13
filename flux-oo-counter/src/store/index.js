
// 如果仍然有 dispatcher 意味着就要 reducer, 到头来只是被 flux 中的各个部分放到一个对象中进行管理
// 完全脱离 flux, 以面向对象的方式进行封装
// 当前问题: 1. 需要 container 2. 所有的东西都集中在 container 中, 回到了原始状态
class Counter {
    constructor() {
        this._states = {current: 1}
        
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    
    // 返回所有状态
    states() {
        return this._states
    }
    
    increase() {
        console.log('in')
        const state = this._states
        state.current ++
    }
    
    decrease() {
        const state = this._states
        state.current --
    }
}

export default new Counter()