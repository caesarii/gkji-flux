import actionType from './actionTypes';

const increaseNumber = (num) => ({
    type: actionType.increase,
    num
});
const decreaseNumber = (num) => ({
    type: actionType.decrease,
    num
});


export default {
    increaseNumber,
    decreaseNumber,
}