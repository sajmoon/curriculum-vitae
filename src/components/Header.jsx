import React from 'react';

export default React.createClass({
  propType: {
    details: React.PropTypes.shape({
      email: React.PropTypes.string.isRequired
    })
  },
  render() {
    let style = {
      header: {
        padding: "40px"
      },
      image: {
        border: "6px solid #eee",
        float: "right"
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
    console.log(details, details.address, details.address.zip);
    return (
      <div style={style.header}>
        <img style={style.image} src="http://s.gravatar.com/avatar/26f491425e1e0507069ee7d86fa058ed?s=80" />
        <span style={style.name}>{details.name}</span>
        <span style={style.email}>{details.email}</span>
        <span style={style.phone}>{details.phone}</span>
        <span style={style.address}>{details.address.street}</span>
        <span style={style.address}>{details.address.city}</span>
        <span style={style.address}>{details.address.zip}</span>
      </div>
    )
  }
})
