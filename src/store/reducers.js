import { combineReducers } from "redux"
import { STORE_USERS, GET_ONE_USER, STORE_TASKS } from "./actions"

const initialState = {
  users: [],
  usersAreDownloaded: false
}

const oneUserReducerInitialState = {
  oneUser: [],
  oneUserId: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERS:
      return {
        users: action.json,
        usersAreDownloaded: true
      }

    default: return state
  }
}

const oneUserReducer = (state = oneUserReducerInitialState, action) => {
  switch (action.type) {
    case GET_ONE_USER:
      console.log(action)
      return {
        oneUser: { name: 'Abbe' }, /*action.users.find(element => element.id === Number(action.userId))*/
        oneUserId: action.userId
      }
      
    default: return state
  }
}

const reducers = combineReducers({
  usersReducer,
  oneUserReducer
})

export default reducers
