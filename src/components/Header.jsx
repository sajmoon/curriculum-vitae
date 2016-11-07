import React from 'react';

import Resource from './Resource.jsx';
import { colors } from '../configuration'
import { connect } from 'react-redux'

const style = {
  topbar: {
    margin: '0px',
    background: colors.topbar.background,
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
    fontSize: '12px',
  },
  email: {
    display: 'block',
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '1px',
    fontFamily: 'Poiret One'
  },
  phone: {
    display: 'block',
    fontSize: '12px',
    letterSpacing: '1px',
    fontFamily: 'Poiret One'
  },
  address: {
    paddingRight: '5px',
    fontSize: '13px',
    letterSpacing: '1px',
    fontFamily: 'Poiret One'
  },
  resource_list: {
    paddingTop: '20px'
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {details, address} = this.props;


    return (
      <div className='header' style={style.topbar}>
        <div className='flexbox-container' style={style.container}>
          <div style={style.header}>
            <span style={style.name}>{details.name}</span>
            <span style={style.email}>{details.email}</span>
            <span style={style.phone}>{details.phone}</span>
            <span style={style.address}>{details.address.street}</span>
            <span style={style.address}>{details.address.city}</span>
            <span style={style.address}>{details.address.zip}</span>
            <span style={style.country}>{details.address.country}</span>
            <div style={style.resource_list}>
              {details.resources.map( (resource, i) => <Resource key={i} resource={resource} />)}
            </div>
          </div>

          <div style={style.imagecontainer}>
            <img style={style.image} src={details.imgurl} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}

export default connect(
  mapStateToProps
)(Header)
