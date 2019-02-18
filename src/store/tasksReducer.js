import { GET_TASKS } from "./actions"

const initialStateForTasks = {
  fetching: false,
  fetched: false,
  tasks: [],
  tasksAreDownloaded: false,
  error: null
}

const tasksReducer = (state = initialStateForTasks, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        tasks: action.json
      }
    
    default: return state
  }
}

export default tasksReducer
