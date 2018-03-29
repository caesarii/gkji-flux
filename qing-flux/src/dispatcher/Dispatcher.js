
// dispatcher
// register callback
// dispatch action and invoke callback

class Dispatcher {
    constructor() {
        // 所有的 dispatch callback
        this._callbacks = {}
        
        // 是否正在 dispatch
        this._isDispatching = false
        
        // 已经调用的回调
        this._isHandled = {}
        
        // 正在调用的回调
        this._isPending = {}
        
        // callback id
        this._lastId = 1
        
        // payload
        // TODO payload 怎么传进来
        this._pendingPayload = null
        
        // 常量
        this._prefix = 'ID_'
    }
    
    // 调用 callback, 保存状态
    _invokeCallback(id) {
        // 正在调用
        this._isPending[id] = true
        // 调用
        this._callbacks[id](this._pendingPayload)
        // 已调用
        this._isHandled[id] = true
    }
    
    // 设置 dispatching 状态
    _startDispatching(payload) {
        // 设置 callback 的状态
        for(let id in this._callbacks) {
            this._isPending[id] = false
            this._isHandled[id] = false
        }
        
        // 设置 dispatcher 的状态
        this._pendingPayload = payload
        this._isDispatching = true
    }
    
    // 清除 dispatching 的状态
    _stopDispatching() {
        delete this._pendingPayload
        this._isDispatching = false
    }
    
    
    
    // 将 callback 注册为 dispatch 的回调
    // 返回 token, 供 waitFor() 使用
    register(callback) {
        const id = this._prefix + this._lastId ++
        this._callbacks[id] = callback
        return id
    }
    
    // 取消注册
    unregister(id) {
        delete this._callbacks[id]
    }
    
    // 组织 callback 的执行顺序, 当前 callback 在执行的 callbacks 后执行
    // 该方法只能由 callback 调用
    // 可以指定多个等待的callback, 所以参数一个 id array
    waitFor(ids) {
        for(let i = 0; i < ids.length; i++) {
            const id = ids[i]
            
            // 正在调用
            if(this._isPending[id]) {
                continue
            }
            
            // 调用前置 callback
            // 前置 callback 是指当前 callback 在等待的 callback
            this._invokeCallback(id)
        }
    }
    
    // 将事件分发到所有回调
    dispatch(payload) {
        //
        this._startDispatching(payload)
        try {
            // 调用所有的回调
            for(let id in this._callbacks) {
                // 已经在调用
                if(this._isPending[id]) {
                    continue
                }
                // 调用
                this._invokeCallback(id)
            }
        } finally {
            this._stopDispatching()
        }
    }
    
    // 是否正在 dispatch
    isDispatching() {
        return this._isDispatching
    }
}

module.exports = Dispatcher

if(require.main === module) {
    
    const testRegisterAndDispatch = () => {
        const d = new Dispatcher()
    
        const callback1 = (payload) => {
            console.log('callback 1', payload)
        }
        
        const callback2 = (payload) => {
            console.log('callback 2', payload)
        }
        d.register(callback1)
        d.register(callback2)
        
        const action1 = {
            type: 'one',
            data: 'action 1'
        }
        
        const action2 = {
            type: 'two',
            data: 'action 2'
        }
        d.dispatch(action1)
        d.dispatch(action2)
    }
    
    const testAction = () => {
        const d = new Dispatcher()
    
        const callback1 = (payload) => {
            if(payload.type === 'one') {
                console.log('callback 1', payload)
            }
        }
        
        const callback2 = (payload) => {
            if(payload.type === 'two') {
                console.log('callback 2', payload)
            }
        }
        d.register(callback1)
        d.register(callback2)
        
        const action1 = {
            type: 'one',
            data: 'action 1'
        }
        
        const action2 = {
            type: 'two',
            data: 'action 2'
        }
        d.dispatch(action1)
        d.dispatch(action2)
    }
    
    const testUnregister = () => {
        const d = new Dispatcher()
    
        const callback1 = (payload) => {
            console.log('callback 1', payload)
        }
        
        const id1 = d.register(callback1)
        
        const action1 = {
            type: 'one',
            data: 'action 1'
        }
        
        d.dispatch(action1)
        
        d.unregister(id1)
        
        d.dispatch(action1)
    }
    
    const testIsdispatching = () => {
        const d = new Dispatcher()
    
        const callback1 = (payload) => {
            console.log('callback 1', payload)
            console.log('isDispatching', d.isDispatching())
        }
        
        const id1 = d.register(callback1)
        
        const action1 = {
            type: 'one',
            data: 'action 1'
        }
        
        console.log('isDispatching', d.isDispatching())
        d.dispatch(action1)
        console.log('isDispatching', d.isDispatching())
    }

    const testWaitFor = () => {
        const d = new Dispatcher()
    
        const callback1 = (payload) => {
            d.waitFor([id2])
            console.log('callback 1', payload)
        }
        
        const callback2 = (payload) => {
            console.log('callback 2', payload)
        }
        
        const id1 = d.register(callback1)
        const id2 = d.register(callback2)
        
        console.log('id', id1, id2)
        
        const action1 = {
            type: 'one',
            data: 'action 1'
        }
        
        d.dispatch(action1)
        
        
    }
    
    // testRegisterAndDispatch()
    //
    // testAction()
    //
    // testUnregister()
    //
    // testIsdispatching()
    //
    // testWaitFor()
    
}