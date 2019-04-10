import { combineReducers } from 'redux';
import { HELLO_NAME_UPDATE } from '../constants/helloConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const helloReducer = combineReducers({ name });

export default helloReducer;
