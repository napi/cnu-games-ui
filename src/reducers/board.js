import {CHANGE_PAGE, REQUEST_BOARDS, RECEIVE_BOARDS, OPEN_MODAL, CLOSE_MODAL} from "../actions/board";

export default function login(state = {
  boards: {},
  showModal: false
}, action) {
  switch(action.type) {
  case REQUEST_BOARDS : {
    let nextState = Object.assign({}, state);
    nextState.boards = {};

    return nextState;
  }
  case RECEIVE_BOARDS : {
    let nextState = Object.assign({}, state);

    nextState.boards = action.data;
    nextState.showModal = false;
    return nextState;
  }
  case OPEN_MODAL : {
    let nextState = Object.assign({}, state);

    nextState.showModal = true;
    return nextState;
  }
  case CLOSE_MODAL : {
    let nextState = Object.assign({}, state);

    nextState.showModal = false;
    return nextState;
  }  

  default : 
    return state;
  }
}
    
