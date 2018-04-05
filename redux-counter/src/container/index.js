import {connect} from 'react-redux';
import actionCreator from '../action/index';
import AppView from '../components/counter'
import actionType from '../action/actionTypes'

const mapStateToProps = (state) => {
    return {
        current: state.counterState,
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClickCounter: (type, numer) => {
        if(type === actionType.increase) {
            dispatch(actionCreator.increaseNumber(numer));
        } else if(type === actionType.decrease) {
            dispatch(actionCreator.decreaseNumber(numer));
        }
    }
});

// App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView)