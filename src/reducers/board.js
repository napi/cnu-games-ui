import {RECEIVE_BOARDS} from "../actions/board";

export default function login(state = {
  boards: [],
  page: 1
}, action) {
  switch(action.type) {
  case RECEIVE_BOARDS : {
    let nextState = Object.assign({}, state);

    nextState.boards = action.data;
    return nextState;
  }
  default : 
    return state;
  }
}
    
