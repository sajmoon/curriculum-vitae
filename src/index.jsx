import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import cvApp from './reducers'
import App from './components/App'

const store = createStore(cvApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
