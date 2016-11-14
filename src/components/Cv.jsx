import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'
import _ from 'lodash'

import {
  toggleVisiblityGroup,
  hideExperienceGroup
} from '../actions'

import Experiences from './Experiences.jsx'

class Cv extends Component {
  constructor(props) {
    super(props)

    this.handleHideClick = this.handleHideClick.bind(this)
  }

  handleHideClick(type) {
    let { dispatch } = this.props
    dispatch(toggleVisiblityGroup(type))
  }

  render() {
    let { experiences, details, groups } = this.props

    return (
      <div>
        { groups.map( (group, index) => {
          return (
            <Experiences
              key={index}
              onHideClick={ this.handleHideClick }
              type={ group.type }
              header={ group.name }
              hidden={ group.hide }
              experiences={ experiences } />
          )
        })}
      </div>
    )
  }
}

Cv.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired
  })),
  details: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  let filteredExperiences = state.experiences.filter( (exp) => {
    return exp.status !== 'HIDE';
  })

  let groups = Object.keys(state.groups.visibility).map( (group) => {
    return Object.assign(
      {},
      state.groups.groupsById[group],
      { type: group },
      { hide: !state.groups.visibility[group] }
    )
  })

  return {
    experiences: filteredExperiences,
    details: state.details,
    groups: groups
  }
}

export default connect(
  mapStateToProps
)(Cv)
