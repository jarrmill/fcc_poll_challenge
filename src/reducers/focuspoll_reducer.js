import * as types from '../actions/types';


export default function(state = {}, action){
  switch(action.type) {
    case types.VOTE_POLL:
      console.log("Vote case, payload: ", action.payload);
      return Object.assign({}, state, {focuspoll: action.payload});
    case types.GET_POLL:
      return Object.assign({}, state, {focuspoll: action.payload});
    default:
      return state;
  }

  return state;
}
