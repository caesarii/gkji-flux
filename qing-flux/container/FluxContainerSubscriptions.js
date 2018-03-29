
import FluxStore from '../store/FluxStore'
const FluxStoreGroup = require('../store/FluxStoreGroup')
const {shallowArrayEqual, } = require('../utils/utils')

// FluxContainerSubscriptions 用于组织一组 store 与 一个 container 的状态更新
class FluxContainerSubscriptions {
    constructor() {
        this._callbacks = []
        this._storeGroup = null
        this._stores = null
        // 所有 store change 事件的回调句柄
        this.tokens = []
    }
    
    setStores(stores) {
        // subscriptions 是对 store 进行组织, 不考虑 state 的变化?
        // 如果当前 stores 与之前的 stores 相同 (浅比较) 则不更新
        if(this._stores && shallowArrayEqual(this._stores, stores)) {
            return
        }
        
        this._stores = stores
        this._resetTokens()
        this._resetStoreGroup()
        
        let changed = false
        // 注册所有 store 的 change 事件
        this._tokens = stores.map(store => store.addListener(() => {
            changed = true
        }))
        
        // 所有 store 更新完之后的回调
        const callCallbacks = () => {
            if(changed) {
                this._callbacks.forEach(fn => fn())
                changed = false
            }
        }
        
        this._storeGroup = new FluxStoreGroup(stores, callCallbacks)
    }
    
    addListener(fn) {
        this._callbacks.push(fn)
    }
    
    reset() {
        this._resetTokens()
        this._resetStoreGroup()
        this._resetCallbacks()
        this._resetStores()
    }
    
    _resetTokens() {
        if(this._tokens) {
            this._tokens.forEach(token => token.remove())
            this._tokens = null
        }
    }
    
    _resetStoreGroup() {
        if(this._storeGroup) {
            this._storeGroup.release()
            this._storeGroup = null
        }
    }
    
    _resetStores() {
        this._stores = null
    }
    
    _resetCallbacks() {
        this._callbacks = []
    }
    
}

module.exports = FluxContainerSubscriptions

