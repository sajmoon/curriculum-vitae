import React, { PropTypes } from 'react'
import Experience from './Experience'
import colors from '../configuration'
import Button from './Button'

const style = {
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
  const { experiences, type, header, hidden } = props

  const currentExperiences = experiences.filter(exp =>
    exp.type === type
  )

  return (
    <div style={style.container}>
      <div style={style.header}>
        <h2>
          {header}
          <small style={{ fontSize: '18px' }}> ({ currentExperiences.length })</small>
          <Button
            style={{ padding: '20px', fontSize: '18px' }}
            onClick={() => { props.onHideClick(type) }} >
            { !hidden && <i className="fa fa-caret-square-o-up" aria-hidden="true" /> }
            { !!hidden && <i className="fa fa-caret-square-o-down" aria-hidden="true" /> }
          </Button>
        </h2>
      </div>
      {
        !hidden &&
        <div>
          { currentExperiences
            .sort((a, b) => b.from - a.from)
            .map((experience, i) =>
              <Experience
                key={i}
                index={i}
                experience={experience} />
            )
          }
        </div>
      }
    </div>
  )
}

Experiences.propTypes = {
  header: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
}

export default Experiences

