
// import Dispatcher from '../dispatcher/Dispatcher'
// import FluxStore from '../store/FluxStore'


function _getUniformDispatcher(stores, Dispatcher) {
    // 所有 store 应该使用 同一个 dispatcher
    const dispatcher = stores[0].getDispatcher()
    return dispatcher
}


// FluxStoreGroup 类组织 store 的执行顺序
// 每次 dispatch 时, 先对 stores 指定的一组 store 进行更新, 然后执行 callback
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


if(require.main === module) {
    const log = console.log
    const Dispatcher = require('../dispatcher/Dispatcher')
    const FluxReduceStore = require('./FluxReduceStore')
    
    const testStoreGroup = () => {
        const d = new Dispatcher()
        
        class Store extends FluxReduceStore {
                constructor(d) {
                    super(d)
                    
                }
                
                getInitialState() {
                    return {
                        name: 'qinghe',
                    }
                }
                
                reduce(state, action) {
                    const {type, data} = action
                    switch(type) {
                        case 'click':
                            log('action click', data)
                            return {...state, ...data}
                        case 'dblclick':
                            log('action dblclick', data)
                            return {...state, ...data}
                        default:
                            state
                    }
                }
            }
            
        const s1 = new Store(d)
        const s2 = new Store(d)
        const s3 = new Store(d)
        
        const group = new FluxStoreGroup([s1, s2, s3], () => {
            log('has changed s1', s1.hasChanged())
            log('has changed s2', s2.hasChanged())
            log('has changed s3', s3.hasChanged())
            log('callback store group')
        })
        
        const actionClick = {
            type: 'click',
            data: {
                click: 'click event'
            }
        }
        d.dispatch(actionClick)
    }
    
    testStoreGroup()
    
}