import React, {Component, PropTypes} from 'react';

let style = {
  hideButton: {
    padding: '10px',
    cursor: 'pointer',
    display: 'none'
  }
}

export default class HideButton extends Component {
  render() {
    return (
      <span style={style.hideButton} onClick={ e => this.handleClick(e)}>-</span>
    )
  }

  handleClick(e) {
    this.props.onHideClick(e);
  }
}

HideButton.propTypes = {
  onHideClick: PropTypes.func.isRequired
}

