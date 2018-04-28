import { observable, computed, action } from 'mobx'

export default class CounterModel {
    @observable count = 0
    
    @action
    increase (current) {
        this.count = current + 1
    }
    
    @action
    decrease (current) {
        this.count = current - 1
    }
}
