import React from 'react';
import Experience from './Experience.jsx';
import {hideExperience} from '../actions';
import { colors } from '../configuration'

export default React.createClass({
  propTypes: {
    experiences: React.PropTypes.array.isRequired,
    type: React.PropTypes.string.isRequired,
    onHideClick: React.PropTypes.func.isRequired
  },

  render() {
    let block = null;
    let {experiences, type} = this.props;

    var style = {
      header: {
        fontFamily: 'Roboto Slab',
        textAlign: 'center',
        fontSize: '1.2em',
        paddingBottom: '1rem',
        paddingTop: '1rem',
        backgroundColor: colors.experience.header.background,
        color: colors.experience.header.font
      },
      hidden: {
        display: 'none'
      },
      visible: {
      }
    }

    // Hide if no elements
    if (!!experiences && experiences.length > 0) {
      block = (
        <div style={style.container}>
          <div style={ style.header }>
            <h2 >{ type }</h2>
          </div>
          <div>
            {experiences.sort( (a,b) => b.from - a.from).map( (experience, i) => <Experience key={i} experience={experience} index={i} onHideClick={ () => { this.props.onHideClick(experience) } } />)}
          </div>
        </div>
      )
    }

    return (
      block
    )
  }
});

