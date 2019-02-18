
/** Action types */
export const GET_USERS = 'GET_USERS'
export const GET_TASKS = 'GET_TASKS'

/** Other constants */
export const USERS = "https://jsonplaceholder.typicode.com/users"

/** Action Creators */

export function storeUsers(json) {
  return { type: GET_USERS, json }
}

export function storeTasks(json) {
  return { type: GET_TASKS, json }
}
