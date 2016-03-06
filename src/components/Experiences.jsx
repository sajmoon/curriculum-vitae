import React from 'react';
import Experience from './Experience.jsx';
import {hideExperience} from '../actions';

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
        fontSize: '1.8em',
        paddingBottom: "1rem"
      },
      container: {
        paddingTop: "2rem"
      },
      divider: {
        marginTop: "3rem"
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
          <h2 style={ style.header }>{ type }</h2>
          <div>
            {experiences.sort( (a,b) => b.from - a.from).map( (experience, i) => <Experience key={i} experience={experience} index={i} onHideClick={ () => { this.props.onHideClick(experience) } } />)}
          </div>
          <hr style={style.divider}/>
        </div>
      )
    }

    return (
      block
    )
  }
});

