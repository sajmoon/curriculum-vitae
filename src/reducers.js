import { combineReducers } from 'redux'
import _ from 'lodash'

import {
  HIDE_EXPERIENCE_GROUP,
  TOGGLE_VISISBLE_GROUP
} from './actions'

import defaultExperiences from './data'

function setID(state) {
  return state.map((exp, i) => {
    const newExp = Object.assign({},
      exp,
      { id: i }
    )
    return newExp
  })
}


function experiences(state = setID(defaultExperiences), action) {
  switch (action.type) {
    case HIDE_EXPERIENCE_GROUP: {
      const newState = _.map(state, (exp) => {
        const newExp = Object({}, exp)
        if (exp.type === action.group) {
          newExp.status = 'HIDE'
        }
        return newExp
      })
      return newState
    }
    default: { return state }
  }
}

const initialGroups = {
  groupsById: {
    WORK: {
      name: 'Work experiences'
    },
    OTHER: {
      name: 'Other'
    },
    EDUCATION: {
      name: 'Educational background'
    },
    COMMISSION: {
      name: 'Commision of Trust'
    }
  },
  visibility: {
    WORK: true,
    EDUCATION: false,
    COMMISSION: false,
    OTHER: false
  }
}

const groups = (state = initialGroups, action) => {
  switch (action.type) {
    case TOGGLE_VISISBLE_GROUP:
      return Object.assign(
        {},
        state,
        {
          visibility: Object.assign(
            {},
            state.visibility,
            {
              [action.group]: !state.visibility[action.group]
            }
          )
        }
      )
    default:
      return state
  }
}

const defaultDetails = {
  name: 'Simon Ström',
  email: 'simon.strom@gmail.com',
  phone: '+46 (0) 739 59 09 87',
  imgurl: 'http://s.gravatar.com/avatar/26f491425e1e0507069ee7d86fa058ed?s=80',
  coverImg: 'http://blog.simonstrom.xyz/assets/img/cover-1.jpg',
  address: {
    street: 'Kungshamra 35/A',
    zip: '170 70',
    city: 'Solna',
    country: 'Sweden'
  },
  resources: [
    { title: 'LinkedIn', url: 'https://se.linkedin.com/in/simonstrom' },
    { title: 'GitHub', url: 'https://github.com/sajmoon/' }
  ]
}

function details(state = defaultDetails) {
  return state
}


const cvApp = combineReducers({
  details,
  experiences,
  groups
})

export default cvApp
