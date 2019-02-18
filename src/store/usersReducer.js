import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESSFUL,
  FETCH_USERS_ERROR } from "./actions"


const initialStateForUsers = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const usersReducer = (state = initialStateForUsers, action) => {
  switch (action.type) {
    
    case FETCH_USERS_START:
      return {
        ...state,
        fetching: true
      }
      
    case FETCH_USERS_SUCCESSFUL:
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      
    case FETCH_USERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      
    default: return state
  }
}

export default usersReducer
