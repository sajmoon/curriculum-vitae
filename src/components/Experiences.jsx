import React, { PropTypes } from 'react';
import Experience from './Experience.jsx';
import { colors } from '../configuration'

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

const Experiences = (props) => {
  let { experiences, type, header, hidden } = props

  let currentExperiences = experiences.filter( (exp) => { return exp.type === type })

  return (
    <div style={ style.container }>
      <div style={ style.header }>
        <h2>
          { header }
          <span style={{padding: '20px', fontSize: '18px'}} onClick={ () => { props.onHideClick(type) } }>
            { !hidden && <i className="fa fa-caret-square-o-up" aria-hidden="true"></i> }
            { !!hidden && <i className="fa fa-caret-square-o-down" aria-hidden="true"></i> }
          </span>
        </h2>
      </div>
      {
        !hidden &&
        <div>
          { currentExperiences
            .sort( (a,b) => b.from - a.from )
            .map( (experience, i) =>
              <Experience
                key={ i }
                experience={ experience } />
            )
          }
        </div>
      }
    </div>
  )
}

Experiences.propTypes = {
  onHideClick: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Experiences

