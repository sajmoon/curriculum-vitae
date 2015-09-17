import React from 'react';
import Radium from 'radium';
import TimeFrame from './TimeFrame.jsx';

export default Radium(React.createClass({
  propTypes: {
    experience: React.PropTypes.object
  },
  render() {
    let experience = this.props.experience;

    let getRemarks = () => {
      return experience.remarks || [];
    }

    let style = {
      container: {
        display: 'flex',
        fontFamily: 'Montserrat',
        padding: "10px"
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
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: 'black',
        ':hover': {
          color: 'grey',
          textDecoration: 'underline',
        }
      },
    }

    let oddeven = {backgroundColor: '#F8F8FB'};
    if (this.props.index % 2 == 0) {
      oddeven = {}
    }

    let component = (
      <div style={[style.container, oddeven ]}>
        <TimeFrame to={experience.to} from={experience.from}/>
        <div style={style.details}>
          <a href={experience.url} style={style.company}>{experience.at}</a>
          <span style={style.title}>{experience.title}</span>
          <span>{experience.subtitle}</span>
          <ul>
            {getRemarks().map( (remark, i) => <li key={i}>{remark}</li>)}
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

