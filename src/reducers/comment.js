import {REQUEST_COMMENTS, RECEIVE_COMMENTS, OPEN_COMMENT_MODAL, CLOSE_COMMENT_MODAL} from "../actions/comment";

export default function login(state = {
  comments: [],
  parentIdx: 0,
  showModal: false
}, action) {
  switch(action.type) {
  case REQUEST_COMMENTS : {
    let nextState = Object.assign({}, state);

    nextState.showModal = false;
    nextState.comments = [];
    return nextState;
  }
  case RECEIVE_COMMENTS : {
    let nextState = Object.assign({}, state);

    nextState.showModal = false;
    nextState.comments = action.data;
    return nextState;
  }
  case OPEN_COMMENT_MODAL : {
    let nextState = Object.assign({}, state);

    nextState.showModal = true;
    nextState.parentIdx = action.data;
    return nextState;
  }
  case CLOSE_COMMENT_MODAL : {
    let nextState = Object.assign({}, state);

    nextState.showModal = false;
    return nextState;
  }  

  default : 
    return state;
  }
}
    
