import fetch from "isomorphic-fetch";
import {browserHistory} from "react-router";

/*
 * action types
 */
export const REQUEST_BOARDS = 'REQUEST_BOARDS';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';

export const REQUEST_BOARD = 'REQUEST_BOARD';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
/*
 * action creators
 */

export function requestBoards(accessToken) {
  return {
    type: REQUEST_BOARDS
  };
}

export function receiveBoards(json) {
  return {
    type: RECEIVE_BOARDS,
    data: json
  };
}

export function requestBoard(accessToken) {
  return {
    type: REQUEST_BOARD
  };
}

export function receiveBoard(json) {
  return {
    type: RECEIVE_BOARD,
    data: json
  };
}

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function fetchBoards(accessToken) {
  return (dispatch) => {
    dispatch(requestBoards(accessToken));
    let uri = `${API_BASE_URL}/api/board`;
    return fetch(uri, {
        method: "GET",
        headers: {
          "token": accessToken
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveBoards(json)))
      .catch(error => console.log(error));
  }
}

export function fetchBoard(accessToken, idx) {
  return (dispatch) => {
    dispatch(requestBoard(accessToken));
    let uri = `${API_BASE_URL}/api/board/${idx}`;
    return fetch(uri, {
        method: "GET",
        headers: {
          "token": accessToken
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveBoard(json)))
      .catch(error => console.log(error));
  }
}

export function writeBoard(accessToken, title, contents) {
  return (dispatch) => {
    let uri = `${API_BASE_URL}/api/board`;
    return fetch(uri, {
        method: "POST",
        headers: {
          "token": accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": title,
          "contents": contents
        })
      })
      // .then(response => dispatch(closeBoardModal()))
      .then(response => dispatch(fetchBoards(accessToken)))
      .catch(error => console.log(error));
  }
}