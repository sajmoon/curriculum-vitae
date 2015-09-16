import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  propTypes: {
    experience: React.PropTypes.object
  },
  render() {
    let experience = this.props.experience;

    let style = {
      container: {
        display: 'flex',
        fontFamily: 'Montserrat'
      },
      timeframe: {
        minWidth: "200px",
        display: "inline",
        fontStyle: 'italic',
        fontSize: '14px',
        textAlign: 'center',
        fontFamily: 'Poiret One'
      },
      details: {
        fontFamily: 'Roboto Slab'
      },
      title: {
        fontWeight: '700',
        fontFamily: 'Montserrat',
        margin: '3px'
      },
      company: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat',
        margin: '3px',
        fontWeight: '700',
        fontSize: '1.2rem'
      }
    }

    let component = (
      <div style={style.container}>
        <div style={style.timeframe}>
          <span>{experience.from}</span>
          <span>-</span>
          <span>{experience.to}</span>
        </div>
        <div style={style.details}>
          <span style={style.company}>{experience.at}</span>
          <span style={style.title}>{experience.title}</span>
          <span>{experience.subtitle}</span>
          <ul>
            {experience.remarks.map( (remark) => <li>{remark}</li>)}
          </ul>
        </div>
      </div>
    )

    if (experience.hide) {
      return null;
    } else {
      return component;
    }
  }
}));

