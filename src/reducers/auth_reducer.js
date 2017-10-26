import * as types from '../actions/types';

export default function(state = {}, action){
  switch(action.type) {
    case types.AUTH_USER:
      console.log("Authenticating user @ email", action.payload);
      return {...state, authenticated: true, email: action.payload};
    case types.UNAUTH_USER:
      return {...state, authenticated: false, email: null};
    case types.ANON_USER:
      return {...state, authenticated: false, email: action.payload};
    case types.GET_POLLS:
    case types.GET_POLL:
    case types.VOTE_POLL:
    case types.ADD_OPTION:
      return state;
  }

  return state;
}
