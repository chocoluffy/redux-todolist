import React from 'react'
import { render } from 'react-dom'
import App from './component/App'
import configureStore from './store/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    isCompleted: false,
    text: 'Initial todo for demo purposes'
  }],
  user: {
  	username: 'chocoluffy',
  	userID: 19
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)