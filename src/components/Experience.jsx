import React from 'react';
import Radium from 'radium';
import TimeFrame from './TimeFrame.jsx';
import HideButton from './HideButton.jsx';
import {hideExperience} from '../actions';
import { colors } from '../configuration'

export default Radium(React.createClass({
  propTypes: {
    experience: React.PropTypes.object
  },
  render() {
    const {dispatch, experience} = this.props;

    let getRemarks = () => {
      return experience.remarks || [];
    }

    let style = {
      row: {
        padding: "15px",
        fontFamily: 'Montserrat',
        wordWrap: 'break-word',
        ':hover': {
          backgroundColor: colors.experience.hover
        },
      },
      odd: {
        backgroundColor: colors.experience.odd
      },
      even: {
        backgroundColor: colors.experience.even,
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
        '@media (min-width: 700px)': {
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '@media (max-width: 700px)': {
          flexDirection: 'column'
        }
      },
      details: {
        fontFamily: 'Roboto Slab'
      },
      title: {
        fontWeight: '700',
        fontFamily: 'Montserrat',
        marginLeft: '3px',
        marginRight: '3px',
        color: '#7E3548',
        '@media (max-width: 700px)': {
          display: 'block',
          textAlign: 'center',
        }
      },
      company: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat',
        margin: '3px',
        fontWeight: '700',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: 'black',
        '@media (max-width: 700px)': {
          display: 'block',
          textAlign: 'center',
        }
      },
    }


    let oddeven = {}
    if (this.props.index % 2 == 0) {
      oddeven = 'even'
    } else {
      oddeven = 'odd'
    }

    let component = (
    <div key={experience.id} style={[style.row, style[oddeven]]}>
      <div style={style.container}>
        <TimeFrame to={experience.to} from={experience.from}/>
        <div style={style.details}>
          <a target="_blank" href={experience.url} style={style.company}>{experience.at}</a>
          <span style={style.title}>{experience.title}</span>
          <span>{experience.subtitle}</span>
          <ul>
            {getRemarks().map( (remark, i) => <li key={i}>{remark}</li>)}
          </ul>
        </div>
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

