import {RECEIVE_BOARDS, OPEN_MODAL, CLOSE_MODAL} from "../actions/board";

export default function login(state = {
  boards: [],
  page: 1,
  showModal: false
}, action) {
  switch(action.type) {
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
    
