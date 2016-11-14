import React from 'react'

import CV from './Cv'
import Header from './Header'

import { StyleRoot } from 'radium'

const App = () => {
  return (
    <StyleRoot>
      <Header />
      <CV />
    </StyleRoot>
  )
}

export default App
