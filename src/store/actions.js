
/** Action types */
export const GET_USERS = 'GET_USERS';
export const GET_TASKS = 'GET_TASKS';
export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

/** Other constants */
export const USERS_URL = "https://jsonplaceholder.typicode.com/users"

/** Action Creators */

export function storeUsers(json) {
  return { type: GET_USERS, json }
}

export function storeTasks(json) {
  return { type: GET_TASKS, json }
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch({ type: FETCH_USERS_START })
    fetch(USERS_URL)
      .then(response => {
        dispatch({ type: FETCH_USERS_SUCCESSFUL, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_USERS_ERROR, payload: error })
      })
  }
}
