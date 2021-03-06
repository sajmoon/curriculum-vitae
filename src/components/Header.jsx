import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Resource from './Resource'
import colors from '../configuration'
import Background from '../pattern.png'

const style = {
  topbar: {
    margin: '0px',
    background: colors.topbar.background,
    backgroundImage: `url(${Background})`,
    color: colors.topbar.font
  },
  header: {
    padding: '40px',
    minWidth: '33%'
  },
  container: {
    display: 'flex'
  },
  image: {
    alignItem: 'center',
    border: '2px solid #eee',
    height: '140px',
    width: '140px',
    margin: '40px',
    borderRadius: '50%',
    marginRight: '20px'
  },
  name: {
    fontSize: '2rem',
    fontFamily: 'Montserrat',
    display: 'block'
  },
  country: {
    fontFamily: 'Montserrat',
    display: 'block',
    fontSize: '12px'
  },
  email: {
    display: 'block',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    letterSpacing: '1px'
  },
  phone: {
    display: 'block',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    letterSpacing: '1px'
  },
  address: {
    paddingRight: '5px',
    fontSize: '13px',
    letterSpacing: '1px',
    fontFamily: 'Montserrat'
  },
  resource_list: {
    paddingTop: '20px'
  }
}

const Header = (props) => {
  const { details } = props

  return (
    <div style={style.topbar}>
      <div style={style.container}>
        <div style={style.header}>
          <span style={style.name}>{details.name}</span>
          <span style={style.email}>{details.email}</span>
          <span style={style.phone}>{details.phone}</span>
          <span style={style.address}>{details.address.street}</span>
          <span style={style.address}>{details.address.city}</span>
          <span style={style.address}>{details.address.zip}</span>
          <span style={style.country}>{details.address.country}</span>
          <div style={style.resource_list}>
            {details.resources.map((resource, i) => <Resource key={i} resource={resource} />)}
          </div>
        </div>

        <div style={style.imagecontainer}>
          <img alt="Simon" style={style.image} src={details.imgurl} />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

Header.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
}

export default connect(
  mapStateToProps
)(Header)
