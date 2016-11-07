import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cvApp from './reducers'

let store = createStore(cvApp)

import CV from './components/Cv.jsx';
import Header from './components/Header.jsx';

import {StyleRoot} from 'radium';

const App = () => {
  return (
    <StyleRoot>
      <Header />
      <CV />
    </StyleRoot>
  )
}


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

