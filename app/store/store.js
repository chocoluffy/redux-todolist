import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducer/reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)


export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}