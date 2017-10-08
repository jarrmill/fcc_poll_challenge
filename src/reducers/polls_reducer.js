import {
  AUTH_USER, UNAUTH_USER, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER, USER_POLLS
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case GET_POLLS:
      return {...state, polls: action.payload.data};
    case AUTH_USER:
    case UNAUTH_USER:
    case ANON_USER:
    case GET_POLL:
    case VOTE_POLL:
      return state;
  }

  return state;
}
