import fetch from "isomorphic-fetch";

/*
 * action types
 */
export const REQUEST_BOARDS = 'REQUEST_BOARDS';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
/*
 * action creators
 */

export function requestBoards(accessToken) {
  return {
    type: REQUEST_BOARDS,
    accessToken
  };
}

export function receiveBoards(json) {
  return {
    type: RECEIVE_BOARDS,
    data: json
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
