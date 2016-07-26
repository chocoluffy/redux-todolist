import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducer/index'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)


export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}