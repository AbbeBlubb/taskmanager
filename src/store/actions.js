
/** Action types */
export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const FETCH_TASKS_START = 'FETCH_TASKS_START';
export const FETCH_TASKS_SUCCESSFUL = 'FETCH_TASKS_SUCCESSFUL';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const SORT_TASKS_BY_ID = 'SORT_TASKS_BY_ID';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/** Other constants */
export const USERS_URL = "https://taskmanager-backend-heroku.herokuapp.com/users";
export const TASKS_URL = "https://taskmanager-backend-heroku.herokuapp.com/todos";

/** Action Creators */
/*
export function storeUsers(json) {
  return { type: GET_USERS, json }
}

export function storeTasks(json) {
  return { type: GET_TASKS, json }
}

*/
