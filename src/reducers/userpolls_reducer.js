import * as types from '../actions/types';


export default function(state = {}, action){
  switch(action.type) {
    case types.USER_POLLS:
      return {...state, polls: action.payload};
    default:
      return state;
  }

  return state;
}
