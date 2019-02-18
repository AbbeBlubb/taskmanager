import { combineReducers, compose, createStore, applyMiddleware } from "redux"
import usersReducer from './usersReducer'
import tasksReducer from "./tasksReducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

const reducers = combineReducers({
  usersReducer,
  tasksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  /* preloadstate, */
  composeEnhancers(applyMiddleware(thunk, logger))
)
