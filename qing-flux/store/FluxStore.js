
const {EventEmitter} = require('fbemitter')

// 定义 store 的基本功能
// 实际使用时继承 FluxReduceStore
class FluxStore {
    constructor(dispatcher) {
        
        // 子类可用的属性
        this.__className = this.constructor.name
        
        this.__changed = false
        this.__changeEvent = 'change'
        this.__dispatcher = dispatcher
        this.__emitter = new EventEmitter()
        
        // 私有属性
        
        // 将 __onDispatch 注册为 dispatcher 的回调 返回callback id
        this._dispatchToken = dispatcher.register(payload => {
            this.__onDispatch(payload)
        })
    }
    
    // 子类必须实现该方法
    // 初始化时该 callback 注册到 dispatcher
    // 该方法是 store 接受新数据的唯一方法
    __onDispatch(payload) {
    
    }
    
    
    // 获取 dispatcher
    getDispatcher() {
        return this.__dispatcher
    }
    
    // 获取
    getDispatchToken() {
        return this._dispatchToken
    }
    
    // 判断 store 在最近的 dispatch 后是否已更新
    hasChanged() {
        return this.__changed
    }

    __emitChange() {
        this.__changed = true
    }
    
    
    // 注册 change 事件
    // 返回 token 对象, token.remove() 将移除注册
    addListener(callback) {
        return this.__emitter.addListener(this.__changeEvent, callback)
    }
    
    
}