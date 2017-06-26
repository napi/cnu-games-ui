import fetch from "isomorphic-fetch";
import {browserHistory} from "react-router";

/*
 * action types
 */
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
/*
 * action creators
 */

export function requestComments(accessToken) {
  return {
    type: REQUEST_COMMENTS
  };
}

export function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
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

export function fetchComments(accessToken) {
  return (dispatch) => {
    dispatch(requestComments(accessToken));
    let uri = `${API_BASE_URL}/api/comment`;
    return fetch(uri, {
        method: "GET",
        headers: {
          "token": accessToken
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveComments(json)))
      .catch(error => console.log(error));
  }
}

export function writeComment(accessToken, comment, idx) {
  if (idx) {
    // Update
    return (dispatch) => {
      let uri = `${API_BASE_URL}/api/comment/${idx}`;
      return fetch(uri, {
          method: "PUT",
          headers: {
            "token": accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "comment": comment
          })
        })
        .then(response => {
          alert('수정되었습니다.');
          window.location.reload();
        })
        .catch(error => console.log(error));
    }
  } else {
    // Insert
    return (dispatch) => {
      let uri = `${API_BASE_URL}/api/comment`;
      return fetch(uri, {
          method: "POST",
          headers: {
            "token": accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "comment": comment
          })
        })
        .then(response => {
          alert('등록되었습니다.');
          dispatch(closeCommentModal());
          dispatch(fetchComments(accessToken));
        })
        .catch(error => console.log(error));
    }
  }
}

export function deleteComment(accessToken, idx) {
  return (dispatch) => {
    let uri = `${API_BASE_URL}/api/comment/${idx}`;
    return fetch(uri, {
        method: "DELETE",
        headers: {
          "token": accessToken
        }
      })
      .then(response => {
        alert('삭제되었습니다.');
        dispatch(closeCommentModal());
        dispatch(fetchComments(accessToken));
      })
      .catch(error => console.log(error));
  }
}