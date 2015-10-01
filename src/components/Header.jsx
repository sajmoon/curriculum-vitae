import React from 'react';

import Resource from './Resource.jsx';

export default React.createClass({
  propType: {
    details: React.PropTypes.shape({
      email: React.PropTypes.string.isRequired
    })
  },
  render() {
    let style = {
      header: {
        padding: "40px",
        width: '33%'
      },
      image: {
        alignItem: 'center',
        border: "8px solid #eee",
        width:  '120px',
        height: '120px',
        margin: "40px"
      },
      name: {
        fontSize: "2rem",
        fontFamily: 'Montserrat',
        display: "block"
      },
      email: {
        display: "block",
        textTransform: 'uppercase',
        fontSize: '12px',
        letterSpacing: '1px',
        fontFamily: 'Poiret One'
      },
      phone: {
        display: "block",
        fontSize: '12px',
        letterSpacing: '1px',
        fontFamily: 'Poiret One'
      },
      address: {
        paddingRight: "5px",
        fontSize: '12px',
        letterSpacing: '1px',
        fontFamily: 'Poiret One'
      }
    }

    let {details, address} = this.props;
    return (
      <div style={{display: 'flex'}}>
        <div style={style.header}>
          <span style={style.name}>{details.name}</span>
          <span style={style.email}>{details.email}</span>
          <span style={style.phone}>{details.phone}</span>
          <span style={style.address}>{details.address.street}</span>
          <span style={style.address}>{details.address.city}</span>
          <span style={style.address}>{details.address.zip}</span>
        </div>
        <div style={style.header}>
          {details.resources.map( (resource, i) => <Resource key={i} resource={resource} />)}
        </div>
        <img style={style.image} src={details.imgurl} />
      </div>
    )
  }
})
