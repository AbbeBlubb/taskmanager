import { combineReducers } from "redux"
import { STORE_USERS, STORE_TASKS } from "./actions"

const initialState = {
  users: [],
  userInformationIsDownloaded: false
}

const storeUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERS:
      return {
        users: action.json,
        userInformationIsDownloaded: true
      }

    default: return state
  }
}

const storeTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TASKS:
      return {
        tasks: action.json
      }

    default: return state
  }
}

const reducers = combineReducers({
  storeUsersReducer,
  storeTasksReducer
})

export default reducers
