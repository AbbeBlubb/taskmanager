import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESSFUL,
  FETCH_TASKS_ERROR, SORT_TASKS_BY_ID
} from "./actions"

const initialStateForTasks = {
  fetching: false,
  fetched: false,
  tasks: [],
  error: null,

  tasksAreSorted: false,
  sortedTasks: {}
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

    case SORT_TASKS_BY_ID:
      const userIdsRepeated = [];
      let userIds = [];
      const sortedTasks = {}

      action.payload.forEach(element => userIdsRepeated.push(element.userId))
      console.log('UserIdsRepeated: ', userIdsRepeated)

      userIds = [...new Set(userIdsRepeated)]
      console.log('UserIds: ', userIds)

      userIds.forEach(element => sortedTasks[element] = [])
      console.log('Initializing instances for sortedTasks: ', sortedTasks)

      action.payload.forEach(element => sortedTasks[element.userId].push(element))
      console.log('Populated sortedTasks: ', sortedTasks)

      return {
        ...state,
        tasksAreSorted: true,
        sortedTasks
      }

    default: return state
  }
}

export default tasksReducer
