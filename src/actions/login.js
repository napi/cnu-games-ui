import fetch from "isomorphic-fetch";

/*
 * action types
 */
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

/*
 * action creators
 */
export function requestLogin(accessToken) {
  return {
    type: REQUEST_LOGIN,
    data: accessToken
  };
}

/*
 * action creators
 */
export function receiveLogin(json) {
  if (json && json.userId) {
    return {
      type: RECEIVE_LOGIN,
      data: json
    }    
  }
}

export function fetchLogin(accessToken) {
  return (dispatch) => {
    dispatch(requestLogin(accessToken));
    let formData = new FormData()
    formData.append('token', accessToken);
    let uri = `${API_BASE_URL}/api/login`;
    return fetch(uri, {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(json => dispatch(receiveLogin(json)))
      .catch(error => console.log(error));
    }
}
