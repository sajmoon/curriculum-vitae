import React from 'react';
import Experience from './Experience.jsx';

export default React.createClass({
  propTypes: {
    experiences: React.PropTypes.array.isRequired,
    type: React.PropTypes.string.isRequired
  },

  render() {
    let {experiences, type} = this.props;

    var style = {
      header: {
        fontFamily: 'Roboto Slab',
        textAlign: 'center',
        fontSize: '1.7em',
        paddingBottom: "1rem"
      },
      container: {
        paddingTop: "2rem"
      },
      divider: {
        marginTop: "3rem"
      }
    }

    return (
      <div style={style.container}>
        <h2 style={ style.header }>{ type }</h2>
        {experiences.sort( (a,b) => b.from - a.from).map( (experience, i) => <Experience key={i} experience={experience} index={i} />)}
        <hr style={style.divider}/>
      </div>
    )
  }
});

