import { observable, computed, action } from 'mobx'

export default class CounterModel {
    @observable count = 0
    
    // @computed
    // get unfinishedTodoCount() {
    //   return this.count.filter(todo => !todo.finished).length;
    // }
    
    @action
    increase (current) {
        this.count = current + 1
    }
    
    @action
    decrease (current) {
        this.count = current - 1
    }
}
