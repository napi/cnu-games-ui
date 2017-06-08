import fetch from "isomorphic-fetch";

/*
 * action types
 */
export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
/*
 * action creators
 */

export function requestProfile(accessToken) {
  console.log('requestProfile');
  return {
    type: REQUEST_PROFILE,
    accessToken
  };
}

export function receiveProfile(json) {
  return {
    type: RECEIVE_PROFILE,
    data: json
  };
}

export function fetchProfile(accessToken) {
  return (dispatch) => {
    dispatch(requestProfile(accessToken));
    let uri = `${API_BASE_URL}/api/user`;
    return fetch(uri, {
        method: "GET",
        headers: {
          "token": accessToken
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveProfile(json)))
      .catch(error => console.log(error));
  }
}
