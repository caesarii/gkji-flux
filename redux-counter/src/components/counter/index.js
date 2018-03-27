import  React, {PropTypes} from 'react';
import {INCR_NUM, DECR_NUM} from '../../constants/actionTypes'

const App = ({current, onClickCounter}) => {
  return (
    <div>
      <div>Current: {current}</div>
      <button onClick={e => onClickCounter(INCR_NUM, current)}>+1</button>
      <button onClick={e => onClickCounter(DECR_NUM, current)}>-1</button>
      {/*<button onClick={e => onClickCounter('sq', current)}>Sq</button>*/}
    </div>
  )
}

App.propsType = {
    current: PropTypes.string.isRequired,
    onClickCounter: PropTypes.func
};

export default App;