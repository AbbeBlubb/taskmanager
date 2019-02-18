import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESSFUL,
  FETCH_TASKS_ERROR } from "./actions"

const initialStateForTasks = {
  fetching: false,
  fetched: false,
  tasks: [],
  error: null
}

const tasksReducer = (state = initialStateForTasks, action) => {
  switch (action.type) {
  
    case FETCH_TASKS_START:
      return {
        ...state,
        fetching: true
      }
  
    case FETCH_TASKS_SUCCESSFUL:
      return {
        ...state,
        fetching: false,
        fetched: true,
        tasks: action.payload
      }
  
    case FETCH_TASKS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    
    default: return state
  }
}

export default tasksReducer
