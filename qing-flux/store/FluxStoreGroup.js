
import Dispatcher from '../dispatcher/Dispatcher'
import FluxStore from '../store/FluxStore'


function _getUniformDispatcher(stores, Dispatcher) {
    // 所有 store 应该使用 同一个 dispatcher
    const dispatcher = stores[0].getDispatcher()
    return dispatcher
}


// FluxStoreGroup 类组织 store 的执行顺序
// 每次 dispatch 时, 先执行 stores 指定的一组回调, 然后执行 callback
class FluxStoreGroup {
    constructor(stores, callback) {
        this._dispatcher = _getUniformDispatcher(stores)
        
        // store 的 dispatch token
        const storeTokens = stores.map(store => store.getDispatchToken())
        this._dispatchToken = this._dispatcher.register(payload => {
            this._dispatcher.waitFor(storeTokens)
            callback()
        })
    }
    
    release() {
        this._dispatcher.unregister(this._dispatchToken)
    }
}

module.exports = FluxStoreGroup