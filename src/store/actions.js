
/** Action types */
export const STORE_USERS = 'STORE_USERS'
export const STORE_TASKS = 'GET_TASKS'
export const GET_ONE_USER = 'GET_ONE_USER'

/** Other constants */
export const USERS = "https://jsonplaceholder.typicode.com/users"

/** Action Creators */

export function storeUsers(json) {
  return { type: STORE_USERS, json }
}

export function getOneUser(box) {
  return { type: GET_ONE_USER, users: box.users, userId: box.userId }
}

export function storeTasks(json) {
  return { type: STORE_TASKS, json }
}
