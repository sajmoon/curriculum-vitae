import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cvApp from './reducers'

let store = createStore(cvApp)

import 'serviceWorker'
import App from './components/app'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
