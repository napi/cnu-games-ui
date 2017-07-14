import {REQUEST_BOARD, RECEIVE_BOARD} from "../actions/board";

export default function login(state = {
}, action) {
  switch(action.type) {
  case REQUEST_BOARD : {
    return {}
  }
  case RECEIVE_BOARD : {
    return Object.assign({}, state, action.data);
  }
  default : 
    return state;
  }
}
    
