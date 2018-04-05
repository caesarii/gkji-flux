import actionType from './actionTypes'
import dispatcher from './dispatcher'


const increaseNumber = (num) => {
    dispatcher.dispatch({
        type: actionType.increase,
        num
    })
}

const decreaseNumber = (num) => {
    dispatcher.dispatch({
        type: actionType.decrease,
        num
    })
}

export default {
    increaseNumber,
    decreaseNumber,
}