import React, { PropTypes } from 'react'

const Resource = (props) => {
  const { url, title } = props.resource
  const style = {
    url: {
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'Montserrat',
      paddingBottom: '10px',
      paddingRight: '10px',
      textAlign: 'right'
    }
  }
  return (
    <a href={url} style={style.url}>{title}</a>
  )
}

Resource.propTypes = {
  resource: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequire
  }).isRequired
}

export default Resource
