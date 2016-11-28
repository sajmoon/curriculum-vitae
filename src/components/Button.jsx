import React, { PropTypes } from 'react'

const style = {
  margin: '20px',
  border: '0',
  cursor: 'pointer',
  background: 'rgb(168, 186, 240)',
  color: '#2574A9',
  fontSize: '18px',
  padding: '10px'
}

function Button(props) {
  return (
    <button style={style} type="button" onClick={props.onClick}>
      { props.children }
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
