import * as types from '../actions/types';


export default function(state = {}, action){
  switch(action.type) {
    case types.GET_POLLS:
      return {...state, polls: action.payload.data};
    case types.DELETE_POLL:
      console.log(action.payload);
    default:
      return state;
  }

  return state;
}
