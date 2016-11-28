import React, { PropTypes } from 'react'

function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      { props.children }
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
