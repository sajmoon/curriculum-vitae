import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cvApp from './reducers'

let store = createStore(cvApp);

import CV from './components/Cv.jsx';
import Header from './components/Header.jsx';

const experiences = [
  {
    from: '',
    type: '',
    to: '',
    title: '',
    url: '',
    subtitle: '',
    at: '',
    remarks: [
    ]
  },
]

const details = {
  name: "Simon Ström",
  email: "simon.strom@gmail.com",
  phone: "+46 (0) 739 59 09 87",
  imgurl: "http://s.gravatar.com/avatar/26f491425e1e0507069ee7d86fa058ed?s=80",
  address: {
    street: "Kungshamra 35/A",
    zip: "170 70",
    city: "Solna",
    country: "Sweden"
  },
  resources: [
    {title: 'LinkedIn', url: 'https://se.linkedin.com/in/simonstrom'},
    {title: 'GitHub', url: 'https://github.com/sajmoon/'}
  ]
}

React.render(
  <Provider store={store}>
    {() =>
      <div>
        <Header details={details} />
        <CV experiences={experiences} details={details} />
      </div>
    }
  </Provider>,
  document.getElementById('app')
);

