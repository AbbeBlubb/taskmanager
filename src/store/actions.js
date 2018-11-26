
/** Action types */
export const STORE_USERS = 'STORE_USERS'
export const STORE_TASKS = 'GET_TASKS'

/** Other constants */
export const USERS = "https://jsonplaceholder.typicode.com/users"

/** Action Creators */

export function storeUsers(json) {
  return { type: STORE_USERS, json }
}

export function storeTasks(json) {
  return { type: STORE_TASKS, json }
}
