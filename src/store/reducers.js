import { combineReducers } from "redux"
import { GET_USERS, GET_TASKS } from "./actions"

const initialStateForUsers = {
  users: [],
  usersAreDownloaded: false
}

const initialStateForTasks = {
  tasks: [],
  tasksAreDownloaded: false
}

const storeUsersReducer = (state = initialStateForUsers, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.json,
        userInformationIsDownloaded: true
      }

    default: return state
  }
}

const storeTasksReducer = (state = initialStateForTasks, action) => {
  switch (action.type) {
    case GET_TASKS:
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
