import React, { Component, PropTypes } from 'react'

const style = {
  hideButton: {
    padding: '10px',
    cursor: 'pointer',
    display: 'none'
  }
}

export default class HideButton extends Component {
  handleClick(e) {
    this.props.onHideClick(e)
  }

  render() {
    return (
      <span style={style.hideButton} onClick={e => this.handleClick(e)}>-</span>
    )
  }
}

HideButton.propTypes = {
  onHideClick: PropTypes.func.isRequired
}

