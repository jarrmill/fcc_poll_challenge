import {
  AUTH_USER, UNAUTH_USER, CREATE_POLL, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER, USER_POLLS, DELETE_POLL
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case GET_POLLS:
      return {...state, polls: action.payload.data};
    case DELETE_POLL:
      console.log(action.payload);
    case AUTH_USER:
    case UNAUTH_USER:
    case ANON_USER:
    case GET_POLL:
    case VOTE_POLL:
      return state;
  }

  return state;
}
