import {RECEIVE_COMMENTS, OPEN_MODAL, CLOSE_MODAL} from "../actions/comment";

export default function login(state = {
  comments: [],
  page: 1,
  showModal: false
}, action) {
  switch(action.type) {
  case RECEIVE_COMMENTS : {
    let nextState = Object.assign({}, state);

    nextState.comments = action.comments;
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
    
