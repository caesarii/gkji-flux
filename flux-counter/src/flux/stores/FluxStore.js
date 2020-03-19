// TODO 用 nodejs eventemitter 进行测试
// !!!!!!!!!!!! 更新 addListener 中的 on 为 addListener
const {EventEmitter} = require('fbemitter')

// FluxReduceStore 的 基类
// 核心就是初始化时将 FluxReduceStore 的 _onDispatch 注册到 dispatcher
// 提供订阅 store change 事件的 addListenr api
// 以及供 FluxReduceStore 调用的 hasChanged, setChanged, emitChange 方法

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

    __setChanged(bool) {
        this.__changed = bool
    }
    
    __emitChange() {
        this.__emitter.emit(this.__changeEvent)
    }
    
    
    // 注册 change 事件
    // 返回 token 对象, token.remove() 将移除注册
    addListener(callback) {
        return this.__emitter.addListener(this.__changeEvent, callback)
    }
}

export default FluxStore
