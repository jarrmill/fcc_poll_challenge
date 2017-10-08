import {
  AUTH_USER, UNAUTH_USER, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case AUTH_USER:
      console.log("Authenticating user @ email", action.payload);
      return {...state, authenticated: true, email: action.payload};
    case UNAUTH_USER:
      return {...state, authenticated: false, email: null};
    case ANON_USER:
      return {...state, authenticated: false, email: action.payload};
    case GET_POLLS:
    case GET_POLL:
    case VOTE_POLL:
      return state;
  }

  return state;
}
