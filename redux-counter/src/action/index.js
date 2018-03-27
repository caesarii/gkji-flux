import {
    INCR_NUM,
    DECR_NUM
} from '../constants/actionTypes';

export const setIncr = (num) => ({
    type: INCR_NUM,
    num
});
export const setDecr = (num) => ({
    type: DECR_NUM,
    num
});