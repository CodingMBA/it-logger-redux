import { combineReducers } from 'redux';
import logReducer from './LogReducer';

export default combineReducers({
  log: logReducer
});
