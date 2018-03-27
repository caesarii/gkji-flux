import {connect} from 'react-redux';
import {setIncr, setDecr} from '../action';
import AppView from '../components/counter'
import {INCR_NUM, DECR_NUM} from '../constants/actionTypes'


const mapStateToProps = (state) => {
    return {
        current: state.counterState,
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClickCounter: (type, numer) => {
        if(type === INCR_NUM) {
            dispatch(setIncr(numer));
        } else {
            dispatch(setDecr(numer));
        }
    }
});

// App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView)