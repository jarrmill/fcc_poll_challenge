import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import pollsReducer from './polls_reducer';
import focuspollReducer from './focuspoll_reducer.js';
import userpollsReducer from './userpolls_reducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  focuspoll: focuspollReducer,
  userpolls: userpollsReducer,
});

export default rootReducer;
