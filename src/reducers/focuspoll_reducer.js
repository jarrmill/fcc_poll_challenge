import {
  AUTH_USER, UNAUTH_USER, CREATE_POLL, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER, DELETE_POLL
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type) {
    case VOTE_POLL:
    case GET_POLL:
      return Object.assign({}, state, {focuspoll: action.payload});
    default:
      return state;
  }

  return state;
}
