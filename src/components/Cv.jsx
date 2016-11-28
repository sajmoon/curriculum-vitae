import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { toggleVisiblityGroup } from '../actions'
import Experiences from './Experiences'

class Cv extends Component {
  constructor(props) {
    super(props)

    this.handleHideClick = this.handleHideClick.bind(this)
  }

  handleHideClick(type) {
    const { dispatch } = this.props
    dispatch(toggleVisiblityGroup(type))
  }

  render() {
    const { experiences, groups } = this.props

    return (
      <div>
        { groups.map((group, index) =>
          <Experiences
            key={index}
            onHideClick={this.handleHideClick}
            type={group.type}
            header={group.name}
            hidden={group.hide}
            experiences={experiences} />
        )}
      </div>
    )
  }
}

Cv.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    remarks: PropTypes.array,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    type: PropTypes.string.isRequied,
    url: PropTypes.string
  })),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      hide: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const filteredExperiences = state.experiences.filter(exp =>
    exp.status !== 'HIDE'
  )

  const groups = Object.keys(state.groups.visibility).map(group =>
    Object.assign(
      {},
      state.groups.groupsById[group],
      { type: group },
      { hide: !state.groups.visibility[group] }
    )
  )

  return {
    experiences: filteredExperiences,
    details: state.details,
    groups
  }
}

export default connect(
  mapStateToProps
)(Cv)
