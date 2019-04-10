import { createStore } from 'redux';
import helloReducer from '../reducers/helloReducer';

const configureStore = (railsProps) => (
  createStore(helloReducer, railsProps)
);

export default configureStore;
